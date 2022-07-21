import React from 'react'
import './Track.css'
import {Link} from 'react-router-dom'
const Track = ({track,ind}) => {

    const minutes = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return seconds === 60
          ? minutes + 1 + ":00"
          : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
      };
    
      

  return (
    <a class="track-link" href={track?.external_urls?.spotify} rel="noreferrer">
        <div className='track'>
        <div className='rank'>
       
            # {ind+1}
        </div>
        <div className='track-image'>
    
            <img src={track.album.images[0].url} alt='mgk'/>
        </div>
        <div className='track-details'>
            <div className='track-name'>
            <a href={track?.external_urls?.spotify}>{track.name}</a>
            
            </div>
            <div className='track-artists'>

            {track?.artists?.map(
                (i, ind) =>(
                    i.name + (ind === track.artists.length -1 ?" ":", "))

              )}
            </div>
        </div>
        <div className='track-duration'>
{/* i.name + (ind === track.artists.length - 1 ? " " : ", ") */}
            {minutes(track.duration_ms)}
        </div>
    </div>
    </a>
    
  )
}

export default Track