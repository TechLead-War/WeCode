"use client";
import React, { useState, useEffect, useRef } from "react";
import { WeCodeEvents } from "@/app/data/TimelineData";

export default function PastEvents() {
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const timelineRef = useRef(null);
  const observerRef = useRef(null);
  const loadMoreTriggerRef = useRef(null);
  const [allEventsLoaded, setAllEventsLoaded] = useState(false);

  // Sort events by date (assuming date format is "Month YYYY")
  const sortedEvents = [...WeCodeEvents].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  // Initialize with first few events
  useEffect(() => {
    setVisibleEvents(sortedEvents.slice(0, 2));
  }, []);

  // Setup intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !loading && visibleEvents.length < sortedEvents.length && !allEventsLoaded) {
        loadMoreEvents();
      }
    }, { threshold: 0.1 });

    if (loadMoreTriggerRef.current) {
      observerRef.current.observe(loadMoreTriggerRef.current);
    }

    return () => {
      if (observerRef.current && loadMoreTriggerRef.current) {
        observerRef.current.unobserve(loadMoreTriggerRef.current);
      }
    };
  }, [visibleEvents, loading, allEventsLoaded]);

  // Function to load more events
  const loadMoreEvents = () => {
    setLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const nextIndex = visibleEvents.length;
      const nextEvents = sortedEvents.slice(nextIndex, nextIndex + 2);
      
      if (nextEvents.length > 0) {
        // Use event IDs to prevent duplicates
        const newEvents = [...visibleEvents];
        nextEvents.forEach(event => {
          if (!newEvents.some(e => e.title === event.title)) {
            newEvents.push(event);
          }
        });
        setVisibleEvents(newEvents);
      }
      
      // Check if all events are loaded
      if (visibleEvents.length >= sortedEvents.length) {
        setAllEventsLoaded(true);
      }
      
      setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 sm:py-20 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
        Past Events
      </h2>
      
      {/* Centered timeline with alternating cards */}
      <div className="relative flex flex-col items-center" ref={timelineRef}>
        {/* Center line with animation */}
        <div className="absolute h-full w-1 bg-white z-0 animate-growLine" 
             style={{transformOrigin: 'top', height: '0'}}></div>
        
        {/* Timeline events */}
        {visibleEvents.map((event, index) => (
          <div 
            key={event.title} 
            className={`relative mb-12 sm:mb-16 w-full flex ${
              // On mobile, all cards are centered
              // On larger screens, they alternate
              index % 2 === 0 ? 'justify-center sm:justify-start' : 'justify-center sm:justify-end'
            }`}
            style={{
              opacity: 0,
              animation: `fadeIn 0.5s ease forwards`,
              animationDelay: `${(index * 0.5) + 1.5}s`,
            }}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                 style={{
                   opacity: 0,
                   animation: `fadeIn 0.3s ease forwards`,
                   animationDelay: `${(index * 0.5) + 1.2}s`,
                 }}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-purple-500 border-3 sm:border-4 border-white"></div>
            </div>
            
            {/* Event card */}
            <div 
              className={`w-10/12 sm:w-5/12 p-3 sm:p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 cursor-pointer hover:shadow-xl transition-shadow
                ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'}`}
              onClick={() => {
                const eventId = encodeURIComponent(event.title.toLowerCase().replace(/\s+/g, "-"));
                window.location.href = `/wecode/${eventId}`;
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{event.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1 sm:mb-2">
                {event.date}
                {event.location ? ` • ${event.location}` : ""}
              </p>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
              
              {/* Display only one photo as main image */}
              {event.photos && event.photos.length > 0 && (
                <div className="mb-2 sm:mb-3">
                  <img
                    src={event.photos[0]}
                    alt={`${event.title} main photo`}
                    className="w-full h-32 sm:h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Loading indicator */}
        {loading && (
          <div className="flex justify-center items-center my-8">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Load more trigger element */}
        {!allEventsLoaded && (
          <div 
            ref={loadMoreTriggerRef} 
            className="h-20 w-full flex justify-center items-center"
          >
            {!loading && <div className="w-1 h-20 bg-white animate-pulse"></div>}
          </div>
        )}
      </div>
    </div>
  );
}

