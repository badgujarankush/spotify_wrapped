import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "../TopSongs/TopSongs.css";
import { useGetTopSongsQuery } from "../../Api/spotifyApi";

import Card from "../TopArtists/Card";
import Button from "../Common/Button";
import Track from "../Common/Track";
const TopSongs = () => {
  const [range, setRange] = useState("long_term");
  const {
    data: topSongs,
    error,
    isLoading,
    isFetching,
  } = useGetTopSongsQuery({ limit: 20, offset: 0, range });

  // if (isLoading || isFetching) {
  //   return (
  //     <div className="loader">
  //       <Bars color="#00BF00" height="80" width="80" />
  //     </div>
  //   );
  // }
  console.log("topSongs:", topSongs);
  return (
    <div className="topArtists">
      <Link to="/" className="banner">
        Wrapped
      </Link>
      <h1>Top Songs</h1>
      <div className="main-section-rest">
        <Button range={range} setRange={setRange} />

        <div className="tracks-card-container">
          {isLoading || isFetching ? (
            <div className="loader">
              <Bars color="#00BF00" height="80" width="80" />
            </div>
          ) : (
            topSongs?.items?.map((item, index) => (
              <Track track={item} ind={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSongs;
