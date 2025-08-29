import { EventoEvent } from '@/lib/types'
import Image from 'next/image'
import React from 'react'

type EventCardProps={
  event: EventoEvent
}

export default function EventCard({event}: EventCardProps) {
  return (
    <section className='max-w-[500px] flex flex-col  basis-80 flex-1 h-[380px] bg-white/[3%] rounded-xl overflow-hidden relative'>
      <Image src={event.imageUrl} alt='placeholder-pic' height={280} width={500}
      className='h-[60%]'/>
      <div className='flex flex-1 flex-col justify-center items-center'>
     <h2 className='text-2xl font-semibold'>{event.name}</h2>
      <p className='italic text-white/75'>{event.organizerName}</p>
      <p className='text-white/50 text-sm mt-4'>{event.location}</p>
      </div>

      <section className='flex flex-col items-center justify-center absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md'>
        <p className='text-xl font-bold -mb-[5px]'>
          {String(new Date(event.date).getDate()).padStart(2, '0')}
        </p>
        <p className='text-xs text-accent uppercase'>
          {new Date(event.date).toLocaleString('default', { month: 'short' })}</p>
      </section>
 


    </section>
  )
}
