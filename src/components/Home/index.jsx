import React, { useContext, useEffect, useState } from 'react'
import apiCalls from '../../apiRequest'
import { userContext } from '../../App';
import SongsOfPlaylist from '../SongsOfPlaylist';
import styles from "./style.module.css";

function Home() {

  const { user } = useContext(userContext);
  const [playlistToShow, setPlaylistToShow] = useState([]);
  const [loveSongs, setLoveSongs] = useState([])
  const [recentlyPlayed,setRecentlyPlayed] = useState(user.recentlyPlayed)
  useEffect(() => {
    apiCalls(
      "get",
      `http://localhost:4000/playlist/getPlaylist?userId=${user._id}`
    ).then((res) => {
      const tempArr = []; 
      for (let i of res.data) {
        for (let j of i.songs) {
          tempArr.push(j); 
        }
      }
      setLoveSongs(tempArr); 
      console.log(recentlyPlayed);
    });
  }, []);
  
  return (
    <div className={styles.loveSongs}>
      <h3>Favorite</h3>
      <div className={styles.loveSongs_list}>
      <SongsOfPlaylist playlistToShow={loveSongs}/>

      </div>
        <h3> Recently Played </h3>
      <div className={styles.loveSongs_list}>
      <SongsOfPlaylist playlistToShow={user.recentlyPlayed}/>

      </div>
    </div>
  )
}
export default Home