import {
    integer,
    pgTable,
    timestamp,
    varchar,
    bigint,
    boolean,
  } from "drizzle-orm/pg-core";
  
  const timestamps = {
    updated_at: timestamp(),
    created_at: timestamp().defaultNow().notNull(),
  };
  
  export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    first_name: varchar({ length: 255 }).notNull(),
    last_name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    username: varchar({ length: 255 }).notNull(),
    clerk_uid: varchar({ length: 255 }).notNull().unique(),
    ...timestamps,
  });
  
  export const verifiedHostnameTable = pgTable("verified_hosts", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    host: varchar({ length: 255 }).notNull().unique(),
    user_id: integer().references(() => usersTable.id),
    ...timestamps,
  });
  
  export const unverifiedHostnameTable = pgTable("unverified_hosts", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    host: varchar({ length: 255 }).notNull(),
    user_id: integer().references(() => usersTable.id),
    ...timestamps,
  });
  
  export const rawAnalytics = pgTable("raw_analytics", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    country_code: varchar(),
    lang_region: varchar(),
    lang_language: varchar(),
    added_unix: bigint({
      mode: "bigint",
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
  