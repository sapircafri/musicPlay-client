import React from 'react';
import VideoPlayer from '../VideoPlayer';
import styles from './style.module.css'
import { BsPlayFill } from 'react-icons/bs';
import { TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb';

function SongPlaying({ songToPlay }) {

    return (
        <div className={styles.SongPlaying}>
            <div className={styles.songplay_img_container}>
                <img className={styles.songplay_img} src={songToPlay.thumbnail.url} alt="" />
            </div>

            <div className={styles.name}>
                <p> {songToPlay.title} </p>
            </div>
            <VideoPlayer videoId={songToPlay.id} songToPlay={songToPlay}/>
        </div>
    )
}

export default SongPlaying

{/* <div className={styles.SongPlaying}>
<div className={styles.songPlay_aa}>
    <img className={styles.songplay_img} src={songToPlay.thumbnail.url} alt="" />


    <img className={styles.player_img} src="https://cdn-icons-png.flaticon.com/128/5356/5356895.png" alt="" />
    <img className={styles.player_img} src="https://cdn-icons-png.flaticon.com/128/5733/5733413.png" alt="" />
    <img className={styles.player_img} src="https://cdn-icons-png.flaticon.com/128/3161/3161569.png" alt="" />
    <img className={styles.player_img} src="https://cdn-icons-png.flaticon.com/128/5733/5733742.png" alt="" />
    <img className={styles.player_img} src="https://cdn-icons-png.flaticon.com/128/4211/4211471.png" alt="" />
    </div>
  
<div   className={styles.songPlay_songDetails}>
    <div> {songToPlay.title}</div>
    <img className="img_channel" src={songToPlay.channel.icon} alt="" />

</div>

<div className="ather_details">{songToPlay.channel.name}</div>

<div className="ather_details">
    <div> {songToPlay.uploadedAt} - </div>
    <div> {songToPlay.views} views</div>
</div> 

</div> */}
