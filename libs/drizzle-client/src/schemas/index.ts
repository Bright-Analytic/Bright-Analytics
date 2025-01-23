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
    hn: varchar({ length: 255 }),
    ua: varchar({ length: 255 }), 
    s: varchar({ length: 255 }),
    tz: varchar({ length: 255 }),
    pid: varchar(),
    sid: varchar({ length: 255 }),
    p: varchar({ length: 255 }),
    vh: integer(),
    vw: integer(),
    l: varchar({ length: 255 }),
    sw: integer(),
    sh: integer(),
    tm: integer(),
    u: varchar({ length: 255 }),
    uid: varchar({ length: 255 }),
    ty: varchar({ length: 255 }),
    r: varchar({ length: 255 }),
    ir: varchar({ length: 255 }),
    ip: varchar({ length: 255 }),
    bn: varchar({ length: 255 }),
    bv: varchar({ length: 255 }),
    on: varchar({ length: 255 }),
    ov: varchar({ length: 255 }),
    dt: varchar({ length: 255 }),
    ut_s: varchar({ length: 255 }),
    ut_m: varchar({ length: 255 }),
    ut_ca: varchar({ length: 255 }),
    ut_co: varchar({ length: 255 }),
    ut_t: varchar({ length: 255 }),
    doc_ref: varchar({ length: 255 })
  });
  