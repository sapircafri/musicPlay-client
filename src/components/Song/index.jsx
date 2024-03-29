import React from "react";
import styles from './style.module.css'

function Song(props) {

    return (
        <div onClick={()=>props.playSong(props.id)} className={styles.song}>
        
            <div className={styles.aa}>
            <img className={styles.img} src={props.thumbnail.url} alt="" />
            </div>
           
            <div className={styles.songDetails}>
              <img className={styles.img_channel} src={props.channel.icon} alt="" />
              <div> {props.title}</div> 
              
            </div>

            <div className={styles.ather_details}>{props.channel.name}</div>

            <div  className={styles.ather_details}>
             <div> {props.uploadedAt} - </div>
              <div> {props.views} views</div>

            </div>
            <div className={styles.time}>{props.duration_formatted}</div> 

            {/* <MdAddToPhotos/> */}
            {/* <img className={styles.addToPlaylist} src="https://cdn-icons-png.flaticon.com/128/9194/9194935.png" alt="" /> */}




        </div>
    );
}

export default Song;
