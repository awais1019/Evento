"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchForm() {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/events/${searchInput}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[560px]">
      <input
        className="w-full outline-none h-16 px-6 rounded-lg bg-white/[7%] ring-accent/50
           focus:bg-white/10 focus:ring-2 transition"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search events in any city"
        spellCheck={false}
      />
    </form>
  );
}
