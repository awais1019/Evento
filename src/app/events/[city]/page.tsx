import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "../../../components/loading";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function EventsPage({ params }: EventPageProps) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <H1 className="mb-20">
        {city == "all"
          ? "All Events"
          : `Events in ${
              city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()
            }`}
      </H1>
      <section>
        <Suspense fallback={<Loading />}>
          <EventList city={city} />
        </Suspense>
      </section>
    </main>
  );
}
