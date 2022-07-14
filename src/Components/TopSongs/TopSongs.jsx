import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import '../TopSongs/TopSongs.css'
import {useGetTopSongsQuery} from '../../Api/spotifyApi'

import Card from '../TopArtists/Card';
import Button from '../Common/Button';
import Track from '../Common/Track'
const TopSongs = () => {

  const [range, setRange] = useState('long_term');
  const {data:topSongs, error, isLoading} = useGetTopSongsQuery({limit:20,offset:0,range});

  const minutes =(millis)=>{
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
      seconds == 60 ?
      (minutes+1) + ":00" :
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
  }
  
  if(isLoading){
    return <div>Loading...</div>
  }
  console.log("topSongs:",topSongs);
  return (
    <div className='topArtists'>
    <Link to='/' className="banner">Wrapped</Link>
        <h1>Top Songs</h1>
        <div className='main-section-rest'>
            <Button range={range} setRange={setRange}/>

            <div className='tracks-card-container'>
            {/* {topSongs?.items?.map((item)=><Card title={item.name} image={item.album.images[0].url}/>
              
            )} */}
            {topSongs?.items?.map((item, index)=><Track rank={index+1} image={item.album.images[0].url} title={item.name} artist={item?.artists?.map((i,ind)=> (i.name)+( ind=== item.artists.length-1 ? ' ':', ') )} duration={minutes(item.duration_ms)}/>
            
            )}
                
            </div>
            {/* (i===item.artists.length-1) ?i.name: i.name+'  ') */}
        </div>
    </div>
  )
}

export default TopSongs