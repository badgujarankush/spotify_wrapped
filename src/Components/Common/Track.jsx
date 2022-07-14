import React from 'react'
import './Track.css'
const Track = ({rank,image,title, artist,duration}) => {
  return (
    <div className='track'>
        <div className='rank'>
            # {rank}
        </div>
        <div className='track-image'>
            <img src={image} alt='mgk'/>
        </div>
        <div className='track-details'>
            <div className='track-name'>
                {title}
            </div>
            <div className='track-artists'>
                {artist}
            </div>
        </div>
        <div className='track-duration'>
            {duration}
        </div>
    </div>
  )
}

export default Track