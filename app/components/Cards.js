"use client";

import React from "react";
import { Carousel, Card } from "@/app/components/ui/CardCarousel";
import { data } from "@/app/data/EventsData"; // adjust path depending on where you put data.js

const DummyContent = () => (
  <>
    {[...new Array(3)].map((_, index) => (
      <div
        key={"dummy-content" + index}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ))}
  </>
);

export function Cards() {
  const cards = data.map((card, index) => (
    <Card
      key={card.src ?? index}
      card={{ ...card, content: <DummyContent /> }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-20" id="events">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Scroll through the journey of our workshops, hackathons, and meetups.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}