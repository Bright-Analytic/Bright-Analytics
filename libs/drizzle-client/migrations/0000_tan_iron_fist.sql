CREATE TABLE "raw_analytics" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "raw_analytics_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"country_code" varchar,
	"lang_region" varchar,
	"lang_language" varchar,
	"added_unix" bigint NOT NULL,
	"added_date" varchar NOT NULL,
	"added_iso" varchar NOT NULL,
	"is_robot" boolean NOT NULL,
	"hostname" varchar NOT NULL,
	"hostname_original" varchar,
	"path" varchar NOT NULL,
	"utm_source" varchar,
	"utm_medium" varchar,
	"utm_campaign" varchar,
	"utm_content" varchar,
	"utm_term" varchar,
	"referrer" varchar,
	"document_referrer" varchar,
	"browser_name" varchar,
	"browser_version" varchar,
	"os_name" varchar,
	"os_version" varchar,
	"device_type" varchar,
	"user_agent" varchar NOT NULL,
	"ip_address" varchar,
	"viewport_height" integer,
	"viewport_width" integer,
	"screen_width" integer,
	"screen_height" integer
);
--> statement-breakpoint
CREATE TABLE "unverified_hosts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "unverified_hosts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"host" varchar(255) NOT NULL,
	"user_id" integer,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL,
	"clerk_uid" varchar(255) NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_clerk_uid_unique" UNIQUE("clerk_uid")
);
--> statement-breakpoint
CREATE TABLE "verified_hosts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "verified_hosts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"host" varchar(255) NOT NULL,
	"user_id" integer,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "verified_hosts_host_unique" UNIQUE("host")
);
--> statement-breakpoint
ALTER TABLE "unverified_hosts" ADD CONSTRAINT "unverified_hosts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "verified_hosts" ADD CONSTRAINT "verified_hosts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;