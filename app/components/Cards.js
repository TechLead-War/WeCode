"use client";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/CardCarousel";
import { data } from "@/app/data/EventsData";
import EventDetails from "@/app/components/EventDetails";

export function Cards() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src ?? index}
      card={{ ...card, content: <EventDetails event={card} /> }}
      index={index}
    />
  ));
  return (
    <div className="w-full h-full py-20 scroll-mt-24 md:scroll-mt-28" id="events">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Scroll through the journey of our workshops, hackathons, and meetups.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}