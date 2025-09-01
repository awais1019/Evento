
import React from "react";
import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

type EventListProps = {
  city:string;
  page:number;
};

export default async function EventList({ city,page }: EventListProps) {
    const {events:Events,totalEvents} = await getEvents(city,page);
    const events=await Events;
    const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";
    const nextPath = totalEvents > page * 6 ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
    
  );
}
