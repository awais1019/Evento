
import React from 'react'
import Skeleton from './skeleton'



export default function SkeletonCard() {
  return (
   <div className='space-y-4'>
   <Skeleton className="w-12 h-12 rounded-full" />
   <Skeleton className="w-[250px]" />
   <Skeleton className="w-[200px]" />
   </div>
  )
}