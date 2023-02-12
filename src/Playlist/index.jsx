import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { GiHeadphones } from 'react-icons/gi'
import apiCalls from '../apiRequest'
import styles from './style.module.css'
// import {FaHeadphonesAlt} from react-icons/fa

const deletePlaylist = (id) => {
  apiCalls("delete","http://localhost:4000/playlist/deletePlaylist",{_id:id})
  .then(console.log("ads"))
}

function Playlist({name,_id,showPlaylist}) {
  return (
    <div className={styles.playlist} onClick={()=>showPlaylist(_id)}>
      <p>{name}</p>
      <GiHeadphones className={styles.img} />
      <BiTrash className={styles.trash} onClick={()=>deletePlaylist(_id)}/>
    </div>
  )
}

export default Playlist