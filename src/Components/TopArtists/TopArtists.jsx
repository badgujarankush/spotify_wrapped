import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "../TopArtists/TopArtists.css";
import Button from "../Common/Button";
import { useGetTopArtistsQuery } from "../../Api/spotifyApi";

import Card from "../Common/Card";
const TopArtists = () => {
  const [range, setRange] = useState("long_term");
  const {
    data: topArtists,
    error,
    isLoading,
    isFetching,
  } = useGetTopArtistsQuery({ limit: 40, offset: 0, range });

  // if(isLoading || isFetching){
  //   return  <div className='loader'><Bars color="#00BF00" height="80" width="80" /></div>
  // }
  console.log("top artists: ",topArtists)

  return (
    <div className="topArtists">
      
      <h1>Top Artists</h1>
      <div className="main-section-rest">
        <Button range={range} setRange={setRange} />
        <div className="artist-card-container">
          {isLoading || isFetching ? (
            <div className="loader">
              <Bars color="#00BF00" height="80" width="80" />
            </div>
          ) : (
            topArtists?.items?.map((item) => (
              <Card link ={item} title={item.name} image={item.images[0].url} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
