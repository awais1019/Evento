import EventList from "@/components/event-list";
import H1 from "@/components/h1";
import React, { Suspense } from "react";
import Loading from "../../../components/loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import z from "zod";

type Props = {
  params: Promise<{
    city: string;
  }>;
};

type EventsProps = Props & {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsProps) {
  const { city } = await params;
  const query = await searchParams;
  const parsedPage = pageNumberSchema.safeParse(query.page);
  if (!parsedPage.success) {
    throw new Error("Invalid Page Number");
  }

  return (
    <main className="flex flex-col items-center py-20 px-[20px] min-h-[110vh]">
      <H1 className="mb-20">
        {city == "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1>
      <section>
        <Suspense key={city + parsedPage.data} fallback={<Loading />}>
          <EventList city={city} page={parsedPage.data} />
        </Suspense>
      </section>
    </main>
  );
}
