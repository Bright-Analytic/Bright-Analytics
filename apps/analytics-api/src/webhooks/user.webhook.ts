import { unverifiedHostnameTable, usersTable, verifiedHostnameTable } from "@shared/drizzle-client/dist/schemas";
import { ApiError } from "../lib/ApiError";
import { ApiResponse } from "../lib/ApiResponse";
import { eq, or } from "drizzle-orm";
import { DrizzleDb } from "@shared/drizzle-client/dist";
import { asyncHandler } from "../lib/asyncHandler";
import { Request } from "express";

const createNewUser = async (payload: any) => {
    const { first_name, last_name, email, username, clerk_uid } = payload
    if (
      [email, username, clerk_uid].some(
        (field) => field.trim() === ""
      )
    )
      return new ApiError(400, "All fields are required");
  
    const rorm = new DrizzleDb({
      replicadb: true
    });
  
    const result1 = await rorm.db
      .select()
      .from(usersTable)
      .where(or(eq(usersTable.email, email), eq(usersTable.username, username)));
  
    if (result1.length > 0)
      return new ApiError(400, "User with same email or username already exits.");
  
    const orm = new DrizzleDb();
  
    const result2 = await orm.db
      .insert(usersTable)
      .values({
        first_name,
        last_name,
        email,
        username,
        clerk_uid,
        created_at: new Date()
      })
      .returning()
      .execute();
  
    if (result2.length <= 0)
      return new ApiError(400, "Failed to create new user.");
  
    return new ApiResponse(201, result2[0])
  }
  
  const deleteUser = async (userid: string) => {  
    const rorm = new DrizzleDb({
      replicadb: true,
    });
  
    const result1 = await rorm.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.clerk_uid, userid));
  
    if (result1.length <= 0) return new ApiError(400, "user does not exist.");
  
    const orm = new DrizzleDb();
  
    const result2 = await orm.db
      .update(usersTable)
      .set({
        deleted_at: new Date(),
      })
      .where(eq(usersTable.clerk_uid, userid))
      .returning()
      .execute();
  
    if (result2.length <= 0)
      return new ApiError(400, "Failed to set delete user.");
  
    return new ApiResponse(
          200,
          result2,
          `user with userid: ${userid} set to deleted successfully.`
        );
  }
  
  const updateUserDetails = async (payload: any, userid: string) => {

    const { username, email, first_name, last_name } = payload;
  
    if (!username && !email && !first_name && !last_name)
      return new ApiError(400, "Please provide some details to update.");
  
    const updateObject = {
      username: username
        ? username.trim() == ""
          ? undefined
          : username
        : undefined,
      email: email ? (email.trim() == "" ? undefined : email) : undefined,
      first_name: first_name
        ? first_name.trim() == ""
          ? undefined
          : first_name
        : undefined,
      last_name: last_name
        ? last_name.trim() == ""
          ? undefined
          : last_name
        : undefined,
        updated_at: new Date()
    };
  
    const orm = new DrizzleDb();
  
    const result = await orm.db
      .update(usersTable)
      .set(updateObject)
      .where(eq(usersTable.clerk_uid, userid))
      .returning()
      .execute();
  
    if (result.length <= 0) return new ApiError(400, "Failed to update userdata.");
  
    return new ApiResponse(200, result[0], "user updated successfully.")
  }
  
  const cascadeDeleteUser = async (userid: string) => {
  
    const rorm = new DrizzleDb({
      replicadb: true,
    });
  
    const result1 = await rorm.db
      .select()
      .from(usersTable)
      .where(eq(usersTable.clerk_uid, userid));
  
    if (result1.length <= 0) return new ApiError(400, "user does not exist.");
  
    const orm = new DrizzleDb();
  
    const result2 = await orm.db
      .delete(verifiedHostnameTable)
      .where(eq(verifiedHostnameTable.user_id, result1[0].id))
      .returning()
      .execute();
  
    if (result2.length <= 0)
      return new ApiError(400, "failed to deleted hostname.");
  
    const result4 = await orm.db
      .delete(unverifiedHostnameTable)
      .where(eq(unverifiedHostnameTable.user_id, result1[0].id))
      .returning()
      .execute();
  
      const result3 = await orm.db
      .delete(usersTable)
      .where(eq(usersTable.id, result1[0].id))
      .returning()
      .execute();
  
      if(result3.length <= 0)
          return new ApiError(400, `Failed to delete user with userid: ${userid}`);
  
     
      return new ApiResponse(200, {
              user: result3[0],
              hostnames: result2,
              unverifiedHostnames: result4
          })
  }
  
  const userWebhookRequestHandler = asyncHandler(async (req, res, next)=>{
    const evt = req.evt;
    if(!evt?.type)
      return new ApiError(401, "Unauthorized");

    console.log("Handling user webhook request.")
    switch (evt.type) {
      case "user.created":
        if (!(evt.data.primary_email_address_id && evt.data.username))
          throw new ApiError(400, "username or email_id not found.")
        console.log("Creating new user", evt.data)
        // create new user
        const createReq = await createNewUser({
          first_name: evt.data.first_name ?? "",
          last_name: evt.data.last_name ?? "",
          email: evt.data.email_addresses.filter(
            (value) => value.id == evt.data.primary_email_address_id
          )[0].email_address,
          username: evt.data.username,
          clerk_uid: evt.data.id,
        })
        const statusCode = createReq.statusCode;
        return res.status(statusCode).json(createReq).end();
        
  
      // update user details
      case "user.updated":
        const updateReq = await updateUserDetails({
          first_name: evt.data.first_name ?? "",
          last_name: evt.data.last_name ?? "",
          email: evt.data.email_addresses.filter(
            (value) => value.id == evt.data.primary_email_address_id
          )[0].email_address,
          username: evt.data.username ?? "",
        }, evt.data.id)
        return res.status(updateReq.statusCode).json(updateReq)
  
        // cascade delete user
      case "user.deleted":
        const cascadeDeleteReq = await cascadeDeleteUser(evt.data.id ?? "");
        return res.status(cascadeDeleteReq.statusCode).json(cascadeDeleteReq)
      default:
        return res.status(400).json(new ApiError(400, "Case does not match."))
    }
  })

  export {
    userWebhookRequestHandler
  }