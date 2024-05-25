// Express route handlers for calendar management

const express = require("express");
const eventrouter = express.Router();
const CalendarEvent = require("../models/CalendarEvent");

// Get all calendar events
eventrouter.get("/events", async (req, res) => {
  try {
    const events = await CalendarEvent.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new calendar event
eventrouter.post("/events", async (req, res) => {
  const event = new CalendarEvent({
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a calendar event
eventrouter.patch("/events/:id", async (req, res) => {
  try {
    const event = await CalendarEvent.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: "Event not found" });
    }
    // Update the event fields
    event.title = req.body.title || event.title;
    event.start = req.body.start || event.start;
    event.end = req.body.end || event.end;
    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a calendar event
eventrouter.delete("/events/:id", async (req, res) => {
  try {
    await CalendarEvent.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = eventrouter;
