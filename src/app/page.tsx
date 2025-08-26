import H1 from "@/components/h1";
import SearchForm from "@/components/searchForm";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-30 pb-2 px-4">
      <H1>
        Find events around you
      </H1>
      <p className="text-2xl lg:text-3xl mb-12 mt-7 opacity-75">
        Browser more than{" "}
        <span className="font-bold italic underline text-accent ">
          10,000
        </span>{" "}
        events around you
      </p>
      <SearchForm />

      <section className="flex mt-4  text-sm text-white/50 gap-x-4">
        <p>Popular:</p>
        <div className="space-x-4 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
