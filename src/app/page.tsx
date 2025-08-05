import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col items-center pt-30 px-3">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        Find events around you
      </h1>
      <p className="text-2xl lg:text-3xl mb-12 mt-7 opacity-75">
        Browser more than{" "}
        <span className="font-bold italic underline text-[#a4f489] ">
          10,000
        </span>{" "}
        events around you
      </p>

      <form className="w-full sm:w-[560px]">
        <input
          className="w-full outline-none h-16 px-6 rounded-lg bg-white/[7%] ring-[#a4f489]/50
           focus:bg-white/10 focus:ring-2 transition"
          type="text"
          placeholder="Search events in any city"
          spellCheck={false}
        />
      </form>

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
