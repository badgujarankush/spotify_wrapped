import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import '../TopArtists/TopArtists.css'
import {useGetTopSongsQuery} from '../../Api/spotifyApi'

import Card from '../TopArtists/Card';
import Button from '../Common/Button'
const TopSongs = () => {

  const [range, setRange] = useState('long_term');
  const {data:topSongs, error, isLoading} = useGetTopSongsQuery({limit:20,offset:0,range});

  
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

            <div className='artist-card-container'>
            {topSongs?.items?.map((item)=><Card title={item.name} image={item.album.images[0].url}/>
              
            )}
                
            </div>
        </div>
    </div>
  )
}

export default TopSongs