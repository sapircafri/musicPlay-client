import React, { useContext, useRef } from 'react'
import styles from './style.module.css'
import { BiSearchAlt2, BiUser } from 'react-icons/bi'
import {GiMusicalNotes} from 'react-icons/gi'
import { userContext } from '../../App';


function Header({ setSearch }) {

    const { user } = useContext(userContext)

    const inputSongRef = useRef();

    const searchSong = (e) => {
        if (e.key === 'Enter') {
            setSearch(inputSongRef.current.value)
        }
    }

    return (
        <div className={styles.header}>
             <GiMusicalNotes className= {styles.symbol_icon}/>
            <p className={styles.symbol}>music<span>Play</span></p>
            <div className={styles.input}>
                <BiSearchAlt2 className={styles.icon} />
                <input onKeyPress={searchSong} className={styles.inputSong} type="text" placeholder="Artist, songs or podcasts" ref={inputSongRef} />
            </div>
            <div className={styles.userConnect}>
                    <BiUser className={styles.userIcon} />
                    <span> {user.email}</span>
            </div>







        </div>
    );
}
export default Header;