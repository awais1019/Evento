import { EventoEvent } from "@/lib/types";
import React from "react";
import EventCard from "./event-card";

type EventListProps = {
  eventList: EventoEvent[];
};

export default function EventList({ eventList }: EventListProps) {
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {eventList.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
