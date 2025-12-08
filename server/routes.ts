import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/bookings", async (req, res) => {
    try {
      const parsed = insertBookingSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid booking data", details: parsed.error.errors });
      }
      const booking = await storage.createBooking(parsed.data);
      res.status(201).json(booking);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Failed to create booking" });
    }
  });

  app.get("/api/bookings", async (_req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  return httpServer;
}
