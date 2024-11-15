import { pgTable, serial, text, timestamp, uuid, jsonb } from 'drizzle-orm/pg-core';

export const progress = pgTable('progress', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull(),
  progressData: jsonb('progress_data').notNull(),
  updatedAt: timestamp('updated_at').defaultNow(),
});