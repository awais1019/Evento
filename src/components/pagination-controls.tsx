import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import  Link  from 'next/link'
import React from 'react'

const BtnStyles="bg-white/5 flex transition justify-center items-center px-5 py-3 opacity-75 hover:opacity-100 text-white rounded-md gap-x-2"

type PaginationControlsProps = {
  previousPath: string ;
  nextPath: string;
};

export default function PaginationControls({ previousPath, nextPath }: PaginationControlsProps) {
  return (
    <section className='flex items-center justify-between w-full'>
        {
            previousPath ? (
                <Link href={previousPath} className={BtnStyles}>
                    <ArrowLeftIcon />
                    Previous
                </Link>
            ) : <div/>
        }
        {
            nextPath ? (
                <Link href={nextPath} className={BtnStyles}>
                    Next
                    <ArrowRightIcon />
                </Link>
            ) : <div/>
        }

    </section>
  )
}

        

