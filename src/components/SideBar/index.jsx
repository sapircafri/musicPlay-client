import React from 'react'
import styles from './style.module.css'
import {AiOutlineHome} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {BiLibrary} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.sideBar}>
     <div className={styles.category_list}>
        <p className={styles.category} onClick= {()=>navigate("home")}> <AiOutlineHome className={styles.icon}/> Home </p>
        <p className={styles.category} onClick= {()=>navigate("search")}> <BsSearch className={styles.icon}/> Search </p>
        <p className={styles.category} onClick= {()=>navigate("playlists")}> <BiLibrary className={styles.icon} /> Your Playlists </p>
     </div>
        
    </div>
  )
}

export default SideBar