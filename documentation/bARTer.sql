CREATE TABLE "follows" (
  "following_user_id" integer,
  "followed_user_id" integer,
  "created_at" timestamp
);

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY,
  "email" varchar,
  "username" varchar,
  "password" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "posts" (
  "id" uuid PRIMARY KEY,
  "title" varchar,
  "body" text,
  "user_id" uuid,
  "created_at" timestamp
);

CREATE TABLE "listings" (
  "id" uuid PRIMARY KEY,
  "user_id" uuid,
  "title" varchar,
  "body" text,
  "created_at" timestamp
);

CREATE TABLE "listing_comments" (
  "id" uuid PRIMARY KEY,
  "listing_id" uuid,
  "user_id" uuid,
  "body" text
);

CREATE TABLE "post_comments" (
  "id" uuid PRIMARY KEY,
  "post_id" uuid,
  "user_id" uuid,
  "body" text
);

COMMENT ON COLUMN "posts"."body" IS 'Content of the post';

ALTER TABLE "follows" ADD FOREIGN KEY ("following_user_id") REFERENCES "users" ("id");

ALTER TABLE "follows" ADD FOREIGN KEY ("followed_user_id") REFERENCES "users" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "listings" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "listing_comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "listing_comments" ADD FOREIGN KEY ("listing_id") REFERENCES "listings" ("id");

ALTER TABLE "post_comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "post_comments" ADD FOREIGN KEY ("post_id") REFERENCES "posts" ("id");
