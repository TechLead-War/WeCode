"use client";
import React from "react";
import { WeCodeEvents } from "@/app/data/TimelineData";

export default function WeCodeTimeline() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        WeCode Club Timeline
      </h2>
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700">
        {WeCodeEvents.map((event, index) => (
          <div key={index} className="relative mb-12 pl-8">
            <span className="absolute -left-4 top-2 w-3 h-3 bg-purple-500 rounded-full border-2 border-white dark:border-gray-900"></span>
            <h3 className="text-xl md:text-2xl font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {event.date}
              {event.location ? ` • ${event.location}` : ""}
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {event.description}
            </p>
            {event.photos && event.photos.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {event.photos.map((photo, idx) => (
                  <img
                    key={idx}
                    src={photo}
                    alt={`${event.title} photo ${idx + 1}`}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
