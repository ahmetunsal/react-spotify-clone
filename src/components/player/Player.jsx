import React, { useEffect, useState } from 'react'
import PlayerArtist from './artist/PlayerArtist';
import PlayerSection from './section/PlayerSection';
import OtherControls from './otherControls/OtherControls';

const Player = () => {

  return (
    <div className='w-full hidden md:flex fixed bottom-0 left-0 bg-black text-white justify-between'>
        <PlayerArtist />
        <PlayerSection />
        <OtherControls />
    </div>
  )
}

export default Player