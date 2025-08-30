import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    className?: string
}

export default function Skeleton({ className }: Props) {
  return (
    <div className={cn("animate-pulse  bg-white/5 h-4 rounded-md", className)}></div>
  )
}