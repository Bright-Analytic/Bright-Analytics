import { bigint, boolean, integer, pgTable as table, text, uniqueIndex, varchar } from "drizzle-orm/pg-core";
export const usersTable = table("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull().unique(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const uvHostnameTable = table("uv_hostnames", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  host: varchar({ length: 255 }).notNull().unique(),
});

export const hostnamesTable = table("hostnames", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  host: varchar({ length: 255 }).notNull().unique(),
});

export const userVerifiedHostnames = table("user_verified_hostnames", {
  userId: integer().notNull().references(() => usersTable.id),
  hostnameId: integer().notNull().references(() => hostnamesTable.id),
}, (table) => ({
  primaryKey: ["userId", "hostnameId"],
}));

export const userUnverifiedHostnames = table("user_unverified_hostnames", {
  userId: integer().notNull().references(() => usersTable.id),
  uvHostnameId: integer().notNull().references(() => uvHostnameTable.id),
}, (table) => ({
  primaryKey: ["userId", "uvHostnameId"],
}));

export const rawAnalytics = table("raw_analytics", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  country_code: varchar(),
  lang_region: varchar(),
  lang_language: varchar(),
  added_unix: bigint({
    mode: "bigint"
  }).notNull(),
  added_date: varchar().notNull(),
  added_iso: varchar().notNull(),
  is_robot: boolean().notNull(),
  hostname: varchar().notNull(),
  hostname_original: varchar(),
  path: varchar().notNull(),
  utm_source: varchar(),
  utm_medium: varchar(),
  utm_campaign: varchar(),
  utm_content: varchar(),
  utm_term: varchar(),
  referrer: varchar(),
  document_referrer: varchar(),
  browser_name: varchar(),
  browser_version: varchar(),
  os_name: varchar(),
  os_version: varchar(),
  device_type: varchar(),
  user_agent: varchar().notNull(),
  ip_address: varchar(),
  viewport_height: integer(),
  viewport_width: integer(),
  screen_width: integer(),
  screen_height: integer(),
});
