import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center gap-3'>
        <div className="w-3 h-3 flex rounded-full bg-zinc-500 animate-pulse"></div>
        <div className="w-3 h-3 flex rounded-full bg-zinc-500 animate-pulse"></div>
        <div className="w-3 h-3 flex rounded-full bg-zinc-500 animate-pulse"></div>
    </div>
  )
}

export default Loading