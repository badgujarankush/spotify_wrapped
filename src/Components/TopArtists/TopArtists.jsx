import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import '../TopArtists/TopArtists.css'
import Button from '../Common/Button'
import {useGetTopArtistsQuery} from '../../Api/spotifyApi'

import Card from '../Common/Card';
const TopArtists = () => {
  const [range, setRange] = useState('long_term');
  const {data:topArtists, error, isLoading} = useGetTopArtistsQuery({limit:20,offset:0,range});
  const buttons  = document.querySelectorAll('.btn');

  const handleRange = (e)=>{
    setRange(e.target.value);
    removeAllActiveClass();
    e.target.classList.add("active");
  }
  const removeAllActiveClass= ()=> {
    buttons.forEach((button) => button.classList.remove("active"));
  }
  if(isLoading){
    return <div>Loading...</div>
  }
  
  return (
    <div className='topArtists'>
    <Link to='/' className="banner">Wrapped</Link>
        <h1>Top Artists</h1>
        <div className='main-section-rest'>
            {/* <div className='range-select'> */}
              {/* <button className='btn active' value={'long_term'} onClick={(e)=>(setRange(e.target.value))}>All Time</button>
              <button className='btn' value={'medium_term'} onClick={(e)=>setRange(e.target.value)}>Six Months</button>
              <button className='btn' value={'short_term'} onClick={(e)=>setRange(e.target.value)}>This Month</button> */}
              {/* <button className='btn active' value={'long_term'} onClick={(e)=>handleRange(e)}>All Time</button>
              <button className='btn' value={'medium_term'} onClick={(e)=>handleRange(e)}>Six Months</button>
              <button className='btn' value={'short_term'} onClick={(e)=>handleRange(e)}>This Month</button>
            </div> */}
            <Button range={range} setRange={setRange}/>
            <div className='artist-card-container'>
            {topArtists?.items?.map((item)=><Card title={item.name} image={item.images[0].url}/>
              
            )}
            
                
            </div>
        </div>
    </div>
  )
}

export default TopArtists