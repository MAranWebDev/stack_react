CREATE TABLE IF NOT EXISTS "sample" (
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"is_done" boolean DEFAULT false NOT NULL,
	CONSTRAINT "sample_name_unique" UNIQUE("name")
);
