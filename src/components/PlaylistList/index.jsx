import React, { useContext, useEffect, useState } from 'react'
import apiCalls from '../../apiRequest';
import { userContext } from '../../App';
import styles from "./style.module.css";

function PlaylistList({songToPlay, setPlaylistList}) {
  const { user } = useContext(userContext);
  const [playlist, setPlaylist] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    apiCalls(
      "get",
      `http://localhost:4000/playlist/getPlaylist?userId=${user._id}`
    ).then((res) => setPlaylist(res.data));
  }, []);
  
const handleChange = (event) => {
  apiCalls(
    "put",
    `http://localhost:4000/playlist/addSongToPlaylist`,{
      _id:event.target.value,
      song: songToPlay
    }
  ).then((res) => console.log(res.data));
  setPlaylistList(false)
};

return (
  <div className={styles.select}>
    <select value={selectedOption} onChange={handleChange}>
    <option value="">playlists</option>
    {playlist.map((v)=>
    <option value={v._id}>{v.name}</option>
    )}
    </select>
  </div>
);
}

export default PlaylistList

