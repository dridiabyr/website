import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Axios from "axios";

const CalendarManagement = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await Axios.get("/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = async (info) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await Axios.delete(`/api/events/${info.event.id}`);
        setEvents(events.filter((event) => event.id !== info.event.id));
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

  const handleDateClick = async (arg) => {
    const title = prompt("Enter event title:");
    if (title) {
      try {
        const response = await Axios.post("/api/events", {
          title,
          start: arg.dateStr,
          end: arg.dateStr,
        });
        setEvents([...events, response.data]);
      } catch (error) {
        console.error("Error adding event:", error);
      }
    }
  };

  return (
    <div>
      <h2>Calendar Management</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default CalendarManagement;
