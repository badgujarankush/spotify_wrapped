import React,{useState, useEffect} from 'react'
import {Bars} from "react-loader-spinner";
import '../Dashboard/Dashboard.css'
import {Link} from 'react-router-dom';
import { useGetRecentlyPlayedQuery,useGetTopArtistsQuery,useGetTopSongsQuery} from '../../Api/spotifyApi'
import {loginURL} from '../../Api/spotify';
const Dashboard = () => {

  const {data:topArtists, error, isLoading} = useGetTopArtistsQuery({limit:5,offset:0,range:'long_term'});
  const {data:topSongs } = useGetTopSongsQuery({limit:5,offset:0,range:'long_term'});
  const {data:recent} = useGetRecentlyPlayedQuery(5);
  if(isLoading){
    return  <div className='loader'><Bars color="#00BF00" height="80" width="80" /></div>
  }
  // if(error.status === 401){
  //   window.location.href(loginURL);
  //   window.location.reload();
  // }
  if (error) {

    return <div className='error'>Error</div>
  }
  
  return (
    <div className='dash'>
    <Link to='/' className="banner">Wrapped</Link>
      <h1>Dashboard</h1>

      <div className='main-section'>
        <div className='top-image'>
        {
          topArtists && (
            <img src={topArtists.items[0].images[0].url} alt={topArtists.items[0].name}></img>
          )
        }
            {/* <img src='https://i.scdn.co/image/ab6761610000e5eb1fd54eb6e30d0bc8f633621e'></img> */}
        </div>
        <div className='top-artists'>
        <div className='title'>
        <Link to='topArtists'>Top Artists</Link>
        </div>
        
        {topArtists?.items?.map((artist,i)=>(
          <p><span>#{i+1}</span>  {artist.name}</p>
        ))}
            {/* <p>Machine Gun Kelly</p>
            <p>Yashraj</p>
            <p>BlackBear</p>
            <p>Seedhe Maut</p>
            <p>Rawal</p> */}
        </div>
        <div className='top-genre'>
        <div className='title'>
        <Link to='favouriteGenre'>Top Genre</Link>
        </div>
        {topArtists?.items?.map((artist,i)=>(
          <p><span>#{i+1}</span>  {artist.genres[0]}</p>
        ))}
            {/* <p>Hip-Hop</p>
            <p>Pop Punk</p>
            <p>Pop</p>
            <p>Desi Rap</p>
            <p>R&B</p> */}
        </div>
        <div className='top-songs'>
        <div className='title'>
        <Link to='topSongs'>Top Songs</Link>
        </div>
        {topSongs?.items?.map((song,i)=>(
          <p><span>#{i+1}</span>  {song.name}</p>
        ))}
            {/* <p>Roll the windows up</p>
            <p>Ek Saath</p>
            <p>idfc</p>
            <p>Batti</p>
            <p>Jungli Kutte</p> */}
        </div>

        <div className='recently-played'>
        <div className='title'>
        <Link to='recentlyPlayed'>Recently played</Link>
        </div>
        {recent?.items?.map((song,i)=>(
          <p><span>#{i+1}</span>  {song.track.name}</p>
        ))}
            {/* <p>My ex's bestfriend</p>
            <p>Dua Lipa</p>
            <p>9 lives</p>
            <p>Chidiya ud</p>
            <p>mainstream sellout</p> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard