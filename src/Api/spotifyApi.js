import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token");

const spotifyApiHeaders = {
  'Authorization' : "Bearer " + token,
};
const createRequest = (url) => ({ url, headers: spotifyApiHeaders });

export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.spotify.com/v1" }),
  mode: "no-cors",
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => createRequest(`/me`),
    }),
    getTopArtists: builder.query({
      query: ({limit,offset,range}) =>createRequest(`/me/top/artists?limit=${limit}&offset=${offset}&time_range=${range}`)
    }),
    getTopSongs: builder.query({
      query: ({limit,offset,range}) =>createRequest(`/me/top/tracks?limit=${limit}&offset=${offset}&time_range=${range}`)
    }),
    getRecentlyPlayed: builder.query({
      query: (limit) =>createRequest(`/me/player/recently-played?limit=${limit}`)
    })
  }),
});

export const {useGetUserQuery, useGetTopArtistsQuery, useGetTopSongsQuery,useGetRecentlyPlayedQuery}  = spotifyApi;