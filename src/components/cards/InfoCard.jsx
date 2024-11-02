import React from 'react'

const InfoCard = ({ children }) => {
  return (
    <div className="w-full flex flex-col bg-zinc-800 p-4 gap-3 rounded-md">
        {children}
    </div>
  )
}

export default InfoCard