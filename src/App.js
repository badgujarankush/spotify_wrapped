import React, { useState, useEffect } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import TopArtists from "./Components/TopArtists/TopArtists";
import TopSongs from "./Components/TopSongs/TopSongs";
import { Routes, Route } from "react-router-dom";
import RecentlyPlayed from "./Components/RecentlyPlayed/RecentlyPlayed";

function App() {
  const [token, setToken] = useState("");
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((element) => element.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  
  return (
    <div className="App">
      {/* {!token ? <LandingPage /> : <a onClick={logout}>Logout</a>} */}
      {!token ? (
        <LandingPage />
      ) : (
        <>
          <div className="dashboard">
            <div className="navbar">
              <Navbar logout={logout} />
            </div>
            <div className="main">
         
              <Routes>
                <Route index exact path="/" element={<Dashboard />} />
                <Route exact path="/topArtists" element={<TopArtists />} />
                <Route exact path="/topSongs" element={<TopSongs />} />
                <Route exact path="/recentlyPlayed" element={<RecentlyPlayed />} />
                {/* <Route exact path="/favouriteGenre" element={<FavouriteGenre />} /> */}
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
