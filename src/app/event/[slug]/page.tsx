import H1 from "@/components/h1";
import { getEvent } from "@/lib/server-utils";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [
    {
      slug: "fashion-runway",
    },
    {
      slug: "dj-practice-session",
    },
  ];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);
  return {
    title: event.name,
  };
}

export default async function EventDetailsPage({ params }: Props) {
  const { slug } = await params;
  const { slug } = await params;
  const eventDetails = await getEvent(slug);

  return (
    <main>
      <section className="py-14 h-full rounded-xl bg-white/[3%] w-full md:py-20 relative overflow-hidden  flex  justify-center items-center flex-row">
        <Image
          className="object-cover blur-3xl z-0"
          src={eventDetails.imageUrl}
          alt="Background-Image"
          quality={50}
          priority
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="relative z-1 flex-col flex lg:flex-row gap-6 lg:gap-14">
          <Image
            className="rounded-xl border-2 border-white/50"
            src={eventDetails.imageUrl}
            alt="Image"
            priority
            width={300}
            height={201}
          />
          <div className="flex flex-col">
            <p className="text-white/75 whitespace-nowrap">
              {new Date(eventDetails.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:3xl">
              {eventDetails.name}
            </H1>

            <p className="text-white/75 whitespace-nowrap">
              Organized by
              <span className="italic">{eventDetails.organizerName}</span>
            </p>
            <button
              className="lg:mt-auto mt-5 text-white border-2 border-white/10 rounded-md
              py-2 transition hover:scale-105 active:scale-[1.02] focus:scale-105 bg-white/25"
            >
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="text-center min-h-[75vh] px-5 py-16">
        <Section>
          <SectionHeading>About this Event</SectionHeading>
          <SectionContent>{eventDetails.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{eventDetails.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}
function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-8">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-6">{children}</h2>;
}
function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg mx-auto max-w-4xl leading-8 text-white/75">
      {children}
    </p>
  );
}
