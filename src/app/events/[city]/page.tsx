import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import { EventoEvent } from "@/lib/types";
import React from "react";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function Page({ params }: EventPageProps) {
    const { city } = await params
  const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
  const events: EventoEvent[] = await res.json();


  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <H1>
        {city == "all"
          ? "All Events"
          : `Events in ${
              city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
            }`}
      </H1>
      <section>
       <EventList eventList={events}/>
      </section>
    </main>
  );
}
