import React from 'react'
import './Track.css'
import {Link} from 'react-router-dom'

const Recent = ({track,time}) => {
      
  const getDiff = (date) => {
    var date = new Date(date).getTime();
    var now = new Date().getTime();

    var diff = 0;

    if (date < now) {
      diff = now - date;
    } else {
      diff = date - now;
    }

    var msec = diff;
    var day = Math.floor(msec / 1000 / 60 / (60 * 24));
    msec -= day * 1000 * 60 * (60 * 24);
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    var result = "";
    if(day===0 && hh===0 && mm===0){
        result = "Few seconds ago"
    }
    else if(day===0 && hh===0 && mm>0){
        result = mm===1 ? mm+ " minute ago": mm +" minutes ago";

    }else if(day===0 && hh>0){
        result = hh===1? hh+ " hour ago": hh +" hours ago";
       
    }else{
        result = day===1? day+ " day ago": day +" days ago";
        
    }
    return result;
  };


  return (
    <div className='track'>
      
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
        <div className='time-stamp'>
            {getDiff(time.played_at)}
        </div>
    </div>
  )
}

export default Recent;