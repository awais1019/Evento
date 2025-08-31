"use client"

import { EventoEvent } from "@/lib/types";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

type EventCardProps = {
  event: EventoEvent;
};

const MotionLink = motion(Link);
export default function EventCard({ event }: EventCardProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <MotionLink
      href={`/event/${event.slug}`}
      ref={ref}
      className="basis-80 flex-1 h-[380px] max-w-[500px]"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
    >
      <section className="flex flex-col w-full h-full  bg-white/[3%] rounded-xl overflow-hidden relative
      hover:scale-105 active:scale-[1.02] transition-all cursor-pointer">
        <Image
          src={event.imageUrl}
          alt="placeholder-pic"
          height={280}
          width={500}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-1 flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">{event.organizerName}</p>
          <p className="text-white/50 text-sm mt-4">{event.location}</p>
        </div>

        <section className="flex flex-col items-center justify-center absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {String(new Date(event.date).getDate()).padStart(2, "0")}
          </p>
          <p className="text-xs text-accent uppercase">
            {new Date(event.date).toLocaleString("default", { month: "short" })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
