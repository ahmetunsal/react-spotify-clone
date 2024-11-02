import React, { useRef, useState } from 'react'
import ArtistCard from '../../components/player/artist/ArtistCard'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const CardList = ({children}) => {
  const [scroll, setScroll] = useState(0);
  const cardDiv = useRef();

  const handleRightScrollClick = (e) => {
    const div = cardDiv.current;
    div.scrollBy({
      left: 700,
      behavior: 'smooth',
    });
    setScroll(scroll + 700)
  };

  const handleScrollClick = (e) => {
    const div = cardDiv.current;
    div.scrollBy({
      left: -700,
      behavior: 'smooth',
    });
    setScroll(scroll - 700)
  };

  return (
    <div ref={cardDiv} className='min-w-full group/item relative flex items-center gap-4 overflow-x-hidden duration-200 ease-in-out'>
        {
          scroll > 199 &&
          <button onClick={handleScrollClick} className="flex sticky left-0 group-hover/item:left-5 opacity-0 group-hover/item:opacity-100 duration-150 z-50">
              <IoIosArrowDropleftCircle className='w-7 h-7 text-white shadow-lg mix-blend-difference' />
          </button>
        }
        {children}
        <button onClick={handleRightScrollClick} className="flex sticky right-5 md:right-0 group-hover/item:right-5 opacity-100 md:opacity-0 group-hover/item:opacity-100 duration-150 z-50">
            <IoIosArrowDroprightCircle className='w-7 h-7 text-white shadow-lg mix-blend-difference' />
        </button>
    </div>
  )
}

export default CardList