import React from "react";
import { useGetRecentlyPlayedQuery } from "../../Api/spotifyApi";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Track from "../Common/Track";
import Recent from "../Common/Recent";
import "./RecentlyPlayed.css";
const RecentlyPlayed = () => {
  const { data: recent, error, isLoading } = useGetRecentlyPlayedQuery(50);
  if (isLoading) {
    return (
      <div className="loader">
        <Bars color="#00BF00" height="80" width="80" />
      </div>
    );
  }

  console.log(recent);
 
  console.log("recently played: ", recent);
  return (
    <div className="topArtists">
      <Link to="/" className="banner">
        Wrapped
      </Link>
      <h1>Recently Played</h1>
      <div className="main-section-rest">
        <div className="recent-tracks-card-container">
          {recent?.items?.map((song, i) => (
            <Recent track={song.track} time={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
