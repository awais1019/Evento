import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <main>
      <h1>Find events around you</h1>
      <p>Browser more than 10,000 events around you</p>

      <form action="">
        <input type="text" placeholder='Search events in any city' spellCheck={false} />
      </form>

      <section>
        <p>Popular:</p>
        <div>
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  )
}

