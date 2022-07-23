import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '../Common/Button'
import { useGetTopArtistsQuery } from '../../Api/spotifyApi'
import BarChart from '../Common/BarChart'
import './genre.css'

const FavouriteGenre = () => {

    const [range, setRange] = useState("long_term");
    const {
      data,
      error,
      isLoading,
      isFetching,
    } = useGetTopArtistsQuery({ limit: 20, offset: 0, range });

    const topArtists = data?.items;

    const capitalizeWords = (str) =>
    str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );

    const getTopGenres = (data) => {
        if (!data) return null;
      
        const genres = [];
        data.forEach((d) => {
          d.genres.forEach((g) => {
            genres.push(g);
          });
        });
      
        const counts = {};
        genres.forEach((g) => {
          counts[g] = (counts[g] || 0) + 1;
        });
      
        const sortable = [];
        const keys = Object.keys(counts);
        keys.forEach((k) => {
          sortable.push([capitalizeWords(k), counts[k]]);
        });
      
        return sortable.sort((a, b) => b[1] - a[1]);
      };
    const genres = getTopGenres(topArtists);
    const title = [];
    const value = [];
    const fillwidth = [];

    {genres &&
      genres.slice(0, 5).map((g, idx) => {
        title.push(g[0]);
        value.push(g[1]);
        const highestValue = genres[0][1];
        fillwidth.push(idx === 0 ? 100 : (value[idx] / highestValue) * 100);
      })}

  return (
    <div className="topArtists">
 
    <h1>Favourite Genre</h1>

     <div className="favourite main-section-rest">
    <div className='result'> 
    <h2>Top Genres</h2>
    <BarChart title={title} fillwidth={fillwidth} height={100} options={{ maintainAspectRatio: false}}/>
    </div>
    <div className='other'>
    <h2>Other Genres</h2>
    {genres &&
              genres.slice(5).map((g) => {
                const [key] = g;
                return <div className='tabs' key={key}>{key}</div>;
              })}
    </div>
   
     </div>

      </div> 
  
  )
}

export default FavouriteGenre