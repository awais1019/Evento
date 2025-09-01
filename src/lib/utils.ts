import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// export const getEvent = unstable_cache(async (slug: string) => {
//   const res = await fetch(
//     `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
//   );
//   const event: EventoEvent = await res.json();

//   return event;
// });

// export const getEvents = unstable_cache(async (city: string, page = 1) => {
//   const res = await fetch(
//     `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
//   );
//   const events: EventoEvent[] = await res.json();
  

//   return events;
// });
