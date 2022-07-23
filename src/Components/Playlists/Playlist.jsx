
import React, {useState } from "react";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import "../TopArtists/TopArtists.css";
import Button from "../Common/Button";
import { useGetTopArtistsQuery, useGetUserPlaylistQuery, useGetUserQuery } from "../../Api/spotifyApi";

import Card from "../Common/Card";
const Playlist = () => {

  const { data:user} = useGetUserQuery();
  const user_id = user?.id;
  const {data:playlists,isFetching, isLoading} = useGetUserPlaylistQuery(user_id);




  return (
    <div className="topArtists playlist">
      
      <h1>Your Playlists</h1>
      <div className="main-section-rest">
        
        <div className="artist-card-container">
          {isLoading || isFetching ? (
            <div className="loader">
              <Bars color="#00BF00" height="80" width="80" />
            </div>
          ) : (
            playlists?.items?.map((item) => (
              <Card link = {item} title={item.name} image={item.images[0].url} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
