import React from "react";
import styles from './style.module.css'
import Song from "../Song"
import { useState } from "react";
import SongPlaying from "../SongPlaying";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage";
import Home from "../Home";
import Playlists from "../Playlists";





function Main(props) {

  const [songClicked, setSongClicked] = useState(false)
  const [songToPlay, setSongToPlay] = useState({})
  const [showPlaylist, setShowPlaylist] = useState(false)

  const playSong = (id) => {
    setSongClicked(true)
    setSongToPlay(props.songs.find((v) => v.id == id))
  }

  return (

    <div className={styles.main}>

      {/* <div className={styles.song_playing}>
        {songClicked && <>
          <SongPlaying songToPlay={songToPlay} playSong={playSong} />
        </>
        }
      </div> */}
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




    </div>
  );
}

export default Main;
