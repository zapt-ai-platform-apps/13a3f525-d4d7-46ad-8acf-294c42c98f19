CREATE TABLE "progress" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID NOT NULL,
  "progress_data" JSONB NOT NULL,
  "updated_at" TIMESTAMP DEFAULT NOW()
);