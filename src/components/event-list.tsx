import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";

type EventListProps = {
  city:string;
};

export default async function EventList({ city }: EventListProps) {
    const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
  const events: EventoEvent[] = await res.json();
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
