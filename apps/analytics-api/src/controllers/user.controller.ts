import { DrizzleDb } from "@shared/drizzle-client";
import { ApiError } from "../lib/ApiError";
import { asyncHandler } from "../lib/asyncHandler";
import { schemas } from "@shared/drizzle-client";
import { eq, or } from "drizzle-orm";
import { ApiResponse } from "../lib/ApiResponse";
import {
  unverifiedHostnameTable,
  usersTable,
  verifiedHostnameTable,
} from "@shared/drizzle-client/dist/schemas";

const getUserData = asyncHandler(async (req, res, next) => {
  const authObject = req.auth;

  const userid = authObject.userId;
  if (!userid) throw new ApiError(400, "userid not found");

  const orm = new DrizzleDb({
    replicadb: true,
  });

  const result = await orm.db
    .select()
    .from(schemas.usersTable)
    .where(eq(schemas.usersTable.clerk_uid, userid));

  if (result.length <= 0)
    throw new ApiError(400, `User with user.id: '${userid}' not found.`);

  res.status(200).json(new ApiResponse(400, result[0]));
});

const createNewUser = asyncHandler(async (req, res, next) => {
  const { first_name, last_name, email, username, clerk_uid } = req.body;
  if (
    [first_name, last_name, email, username, clerk_uid].some(
      (field) => field.trim() === ""
    )
  )
    throw new ApiError(400, "All fields are required");

  const rorm = new DrizzleDb({
    replicadb: true,
  });

  const result1 = await rorm.db
    .select()
    .from(usersTable)
    .where(or(eq(usersTable.email, email), eq(usersTable.username, username)));

  if (result1.length > 0)
    throw new ApiError(400, "User with same email or username already exits.");

  const orm = new DrizzleDb();

  const result2 = await orm.db
    .insert(usersTable)
    .values({
      first_name,
      last_name,
      email,
      username,
      clerk_uid,
    })
    .returning()
    .execute();

  if (result2.length <= 0)
    throw new ApiError(400, "Failed to create new user.");

  res.status(201).json(new ApiResponse(201, result2[0]));
});

const deleteUser = asyncHandler(async (req, res, next) => {
  const userid = req.auth.userId;

  if (!userid) throw new ApiError(401, "Unauthorized");

  const rorm = new DrizzleDb({
    replicadb: true,
  });

  const result1 = await rorm.db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerk_uid, userid));

  if (result1.length <= 0) throw new ApiError(400, "user does not exist.");

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
    throw new ApiError(400, "Failed to set delete user.");

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        result2,
        `user with userid: ${userid} set to deleted successfully.`
      )
    );
});

const updateUserDetails = asyncHandler(async (req, res, next) => {
  const userid = req.auth.userId;

  if (!userid) throw new ApiError(401, "Unauthorized");

  const { username, email, first_name, last_name } = req.body;

  if (!username && !email && !first_name && !last_name)
    throw new ApiError(400, "Please provide some details to update.");

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
  };

  const orm = new DrizzleDb();

  const result = await orm.db
    .update(usersTable)
    .set(updateObject)
    .where(eq(usersTable.clerk_uid, userid))
    .returning()
    .execute();

  if (result.length <= 0) throw new ApiError(400, "Failed to update userdata.");

  res
    .status(200)
    .json(new ApiResponse(200, result[0], "user updated successfully."));
});

const cascadeDeleteUser = asyncHandler(async (req, res, next) => {
  const userid = req.auth.userId;

  if (!userid) throw new ApiError(401, "Unauthorized");

  const rorm = new DrizzleDb({
    replicadb: true,
  });

  const result1 = await rorm.db
    .select()
    .from(usersTable)
    .where(eq(usersTable.clerk_uid, userid));

  if (result1.length <= 0) throw new ApiError(400, "user does not exist.");

  const orm = new DrizzleDb();

  const result2 = await orm.db
    .delete(verifiedHostnameTable)
    .where(eq(verifiedHostnameTable.user_id, result1[0].id))
    .returning()
    .execute();

  if (result2.length <= 0)
    throw new ApiError(400, "failed to deleted hostname.");

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
        throw new ApiError(400, `Failed to delete user with userid: ${userid}`);

    res.status(200).json(
        new ApiResponse(200, {
            user: result3[0],
            hostnames: result2,
            unverifiedHostnames: result4
        })
    )
});


export {
    getUserData,
    createNewUser,
    updateUserDetails,
    deleteUser,
    cascadeDeleteUser
}