import React from 'react'
import {Link} from 'react-router-dom';
import '../Navbar/Navbar.css';
import { useGetUserQuery } from '../../Api/spotifyApi';
const Navbar = ({logout}) => {
  const { data, error, isLoading } = useGetUserQuery();
  const userName = data?.display_name;
  return (
    <div className='nav-container'>
    <Link to='/' className="banner">Wrapped</Link>
        <div className='user-container'>
            <h1>Welcome</h1>
            <span>{userName}</span>
        </div>
        <div className='menu-container'>
            <Link to='/'>Dashboard</Link>
            <Link to='/topArtists'>Top Artist</Link>
            <Link to='/topSongs'>Top Song</Link>
            <Link to='/favouriteGenre'>Favourite Genre</Link>
            <Link to='/recentlyPlayed'>Recently Played</Link>
        </div>

        <a id='logout' onClick={logout}>LogOut</a>
    </div>
  )
}

export default Navbar