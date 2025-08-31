import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "../../../components/loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({params}: Props): Metadata {
  const { city } = params;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({ params }: Props) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <H1 className="mb-20">
        {city == "all"
          ? "All Events"
          : `Events in ${capitalize(city)}`}
      </H1>
      <section>
        <Suspense fallback={<Loading />}>
          <EventList city={city} />
        </Suspense>
      </section>
    </main>
  );
}
