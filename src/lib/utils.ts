import { EventoEvent } from "@prisma/client";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { prisma } from "./prisma";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvent(slug: string) {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );
  // const event: EventoEvent = await res.json();
  const event=await prisma.eventoEvent.findUnique({
    where: { slug }
  });
  return event;
}
export async function getEvents(city: string) {
  // const res = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );
  // const events: EventoEvent[] = await res.json();
  const events=prisma.eventoEvent.findMany({
    where:{
      city: city==="all"?undefined:capitalize(city)
    }
  })

  return events;
}
