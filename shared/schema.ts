import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  serviceType: text("service_type").notNull(),
  customerName: text("customer_name").notNull(),
  phone: text("phone").notNull(),
  preferredDate: date("preferred_date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  notes: text("notes"),
  status: text("status").default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  status: true,
});

export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type Booking = typeof bookings.$inferSelect;
