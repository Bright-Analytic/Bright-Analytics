import { DrizzleDb } from "@shared/drizzle-client";
import { ApiError } from "../lib/ApiError";
import { asyncHandler } from "../lib/asyncHandler";
import { schemas } from "@shared/drizzle-client";
import { eq } from "drizzle-orm";
import { ApiResponse } from "../lib/ApiResponse";

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

export {
  getUserData
}