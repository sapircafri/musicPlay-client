import React from 'react'
import Song from '../Song'
import styles from "./style.module.css";


function SongsOfPlaylist({playlistToShow}) {
  {console.log(playlistToShow)}

  return (
<div className={styles.songsOfPlaylist}>
          {playlistToShow.map((v) => (
            <div className={styles.songDiv}>
              <Song {...v} />
            </div>  
          ))}
        </div>  )
}

export default SongsOfPlaylist