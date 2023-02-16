import React, { useContext, useEffect, useState } from "react";
import apiCalls from "../../apiRequest";
import { userContext } from "../../App";
import Playlist from "../../Playlist";
import Song from "../Song";
import styles from "./style.module.css";
import axios from "axios";
import AddPlaylist from "../AddPlaylist";
import SongsOfPlaylist from "../SongsOfPlaylist";

function Playlists() {
  const { user } = useContext(userContext);
  const [playlist, setPlaylist] = useState([]);
  const [playlistToShow, setPlaylistToShow] = useState();
  const showPlaylist = (_id) => {
    setPlaylistToShow(playlist.find((v) => v._id == _id));
  };

  useEffect(() => {
    apiCalls(
      "get",
      `http://localhost:4000/playlist/getPlaylist?userId=${user._id}`
    ).then((res) => setPlaylist(res.data));
  }, [playlist]);

  return (
    <div className={styles.playlists}>
      <h3>Playlists</h3>
      <div className={styles.playlists_list}>
        <AddPlaylist/>
        {playlist.map((v) => (
          <Playlist {...v} showPlaylist={showPlaylist} />
        ))}
      </div>

      {playlistToShow && (
        <SongsOfPlaylist playlistToShow={playlistToShow.songs} />
      )}
    </div>
  );
}

export default Playlists;
