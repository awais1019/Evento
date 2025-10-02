import "server-only"

import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

import { capitalize } from "./utils";
import { prisma } from "./prisma";

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: { slug },
  });
  if (!event) {
    return notFound();
  }
  return event;
});

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  const totalEvents = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return {
    events,
    totalEvents,
  };
});
