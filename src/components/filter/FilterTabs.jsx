import React from 'react'

const FilterTabs = () => {
  return (
    <div className='w-full flex gap-2'>
        <button className={`flex bg-white text-black px-4 py-2 rounded-full`}>
            Hepsi
        </button>
        <button className={`flex bg-zinc-800 px-4 py-2 rounded-full`}>
            Müzik
        </button>
        <button className={`flex bg-zinc-800 px-4 py-2 rounded-full`}>
            Podcast
        </button>
    </div>
  )
}

export default FilterTabs