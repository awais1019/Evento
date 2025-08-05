import React from 'react'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className='max-w-7xl min-h-screen mx-auto bg-white/[2%] flex flex-col'>{children}</div>
  )
}
