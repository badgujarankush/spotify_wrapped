// import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom';
// import '../TopArtists/TopArtists.css'
// import {useGetTopSongsQuery} from '../../Api/spotifyApi'
// import Card from '../TopArtists/Card';

// const TopSongs = () => {
//   const [range, setRange] = useState('long_term');
//   const {data:topSongs, error, isLoading} = useGetTopSongsQuery({limit:20,offset:0,range});
//   const buttons  = document.querySelectorAll('.btn');

//   const handleRange = (e)=>{
//     setRange(e.target.value);
//     removeAllActiveClass();
//     e.target.classList.add("active");
//   }
//   const removeAllActiveClass= ()=> {
//     buttons.forEach((button) => button.classList.remove("active"));
//   }
//   if(isLoading){
//     return <div>Loading...</div>
//   }
//   console.log("topSongs:",topSongs);
//   return (
//     <div className='topArtists'>
//     <Link to='/' className="banner">Wrapped</Link>
//         <h1>Top Songs</h1>
//         <div className='main-section-rest'>
//             <div className='range-select'>
  
//               <button className='btn active' value={'long_term'} onClick={(e)=>handleRange(e)}>All Time</button>
//               <button className='btn' value={'medium_term'} onClick={(e)=>handleRange(e)}>Six Months</button>
//               <button className='btn' value={'short_term'} onClick={(e)=>handleRange(e)}>This Month</button>
//             </div>

//             <div className='artist-card-container'>
//             {topSongs?.items?.map((item)=><Card title={item.name} image={item.album.images[0].url}/>
              
//             )}
//             {topArtists && <Card title={topArtists.items[0].name} image={topArtists.items[0].images[0].url}/>}
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default TopSongs