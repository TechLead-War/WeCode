"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import EventDetails from "@/app/components/EventDetails";
import { WeCodeEvents } from "@/app/data/TimelineData";

export default function EventDetailsPage() {
  const params = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.eventId) {
      // Find the event by ID (using title as ID for now)
      const foundEvent = WeCodeEvents.find(
        (e) => encodeURIComponent(e.title.toLowerCase().replace(/\s+/g, "-")) === params.eventId
      );
      
      setEvent(foundEvent || null);
      setLoading(false);
    }
  }, [params.eventId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white mt-16 dark">
        <Navbar />
        <div className="flex justify-center items-center h-screen">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black text-white mt-16 dark">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p>Sorry, we couldn't find the event you're looking for.</p>
          <a href="/wecode" className="text-purple-400 hover:underline mt-4 inline-block">
            Back to Timeline
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white mt-16 dark">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <a href="/wecode" className="text-purple-400 hover:underline mb-6 inline-block">
          &larr; Back to Timeline
        </a>
        <h1 className="text-3xl md:text-5xl font-bold mb-8">{event.title}</h1>
        <EventDetails event={event} />
      </div>
    </div>
  );
}