import React, { useContext } from "react";
import styles from './style.module.css'
import Song from "../Song"
import { useState } from "react";
import SongPlaying from "../SongPlaying";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage";
import Home from "../Home";
import Playlists from "../Playlists";
import apiCalls from "../../apiRequest";
import { userContext } from "../../App";





function Main(props) {

  const {user} = useContext(userContext)

  const [songClicked, setSongClicked] = useState(false)
  const [songToPlay, setSongToPlay] = useState({})
  const [showPlaylist, setShowPlaylist] = useState(false)

  const playSong = (id) => {
    setSongClicked(true)
    setSongToPlay(props.songs.find((v) => v.id == id))
    // apiCalls("put","http://localhost:4000/user/addSongToRecently",{
    //   email:user.email,
    //   song : songToPlay
    // })
  }

  return (

    <div className={styles.main}>

      <Routes >
        <Route path="/home" element={<Home />} />
`       <Route path="/playlists" element={<Playlists />} />
        <Route path="/search" element={
          <div className={styles.songs_container}>
            {props.songs.map((v) =>
              <Song {...v} playSong={playSong} />)
            }
          </div>} />
      </Routes>

      <div className={styles.song_playing_container}>
        {songClicked && <>
          <SongPlaying songToPlay={songToPlay} playSong={playSong} />
        </>
        }
      </div>



    </div>
  );
}

export default Main;
