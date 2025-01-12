import { ApiError } from "../lib/ApiError";
import { asyncHandler } from "../lib/asyncHandler";
import { DrizzleDb } from "@shared/drizzle-client"
const getVerifiedHostname = asyncHandler((req, res, next) => {
  const query = req.query;
  if (!query.hostname) {
    throw new ApiError(400, "Hostname is a required field!");
  }
  const orm = new DrizzleDb();
});

const getUnVerifiedHostname = asyncHandler((req, res, next) => {
  const query = req.query;
  if (!query.hostname) {
    throw new ApiError(400, "Hostname is a required field!");
  }
  const orm = new DrizzleDb();
});

const postVerifiedHostname = asyncHandler((req, res, next) => {
  const query = req.query;
  if (!query.hostname) {
    throw new ApiError(400, "Hostname is a required field!");
  }
  const orm = new DrizzleDb();
});

const postUnVerifiedHostname = asyncHandler((req, res, next) => {
  const query = req.query;
  if (!query.hostname) {
    throw new ApiError(400, "Hostname is a required field!");
  }
  const orm = new DrizzleDb();
});

export {
  getVerifiedHostname,
  getUnVerifiedHostname,
  postUnVerifiedHostname,
  postVerifiedHostname,
};
