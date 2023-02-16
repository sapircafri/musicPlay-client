import React, { useRef, useState } from 'react'
import styles from "./style.module.css";
import YouTube from 'react-youtube';
import { BsPauseCircle, BsPlayFill } from 'react-icons/bs';
import { TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb';
import {MdAddToPhotos} from 'react-icons/md'
import { useLocation } from "react-router-dom";
import PlaylistList from '../PlaylistList';

function VideoPlayer(props) {
  const location = useLocation();

  const [player, setPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlistList, setPlaylistList] = useState(false);

  
  const handlePlay = () => {
    setIsPlaying(true);
  }

  const handlePause = () => {
    setIsPlaying(false);
  }
  
  const handlePlayerReady = (event) => {
    setPlayer(event.target);
  };
  
  const handleTogglePlay = () => {
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };
  
  const { videoId } = props;
    const opts = {
      height: '1',
      width: '1',
      playerVars: {
        autoplay: 1,
      },
    };
  
    return (
      <div className={styles.videoPlayer}>
        <div className={styles.youtube}>
            <YouTube 
            videoId={videoId} 
            opts={opts} 
            onPlay={handlePlay}
            onPause={handlePause}
            onReady={handlePlayerReady}
            />
        </div>
       
        <div className={styles.actions}>
            {/* <TbPlayerSkipBack/> */}
          {isPlaying?<BsPauseCircle className={styles.play} onClick={handleTogglePlay}/> 
          :<BsPlayFill className={styles.play} onClick={handleTogglePlay}  />
          }
           {(location.pathname !== '/playlists' && location.pathname !== '/home' )  &&
              <MdAddToPhotos className={styles.icon} onClick={()=> setPlaylistList(!playlistList)}/>
            }

            {playlistList && 
            <PlaylistList songToPlay={props.songToPlay} setPlaylistList={setPlaylistList} />
            }
           
            {/* <TbPlayerSkipForward/> */}
        </div>

      </div>
      
      )
      
  }
  

export default VideoPlayer



// import React, { useState, useRef } from 'react';
// import YouTube from 'react-youtube';

// function VideoPlayer(props) {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const playerRef = useRef(null);

//   function handlePlay() {
//     setIsPlaying(true);
//     playerRef.current.playVideo();
//   }

//   function handlePause() {
//     setIsPlaying(false);
//     playerRef.current.pauseVideo();
//   }



//   return (
//     <div>
//       <YouTube videoId={props.videoId} opts={opts} onReady={(event) => (playerRef.current = event.target)} />
//       <div>
//         {isPlaying ? (
//           <button onClick={handlePause}>Pause</button>
//         ) : (
//           <button onClick={handlePlay}>Play</button>
//         )}
//       </div>
//     </div>
//   );
// }
