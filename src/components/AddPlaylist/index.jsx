import React, { useContext, useRef, useState } from 'react'
import styles from "./style.module.css";
import { SiAddthis } from "react-icons/si";
import { BiArrowBack } from "react-icons/bi";
import apiCalls from '../../apiRequest';
import { userContext } from '../../App';
import axios from 'axios';


function AddPlaylist() {

    const [enterName,setEnterName] = useState(false)
    const { user } = useContext(userContext);
    const inputSongRef = useRef();

    const createPlaylist = (e) => {
        if (e.key === 'Enter') {
            apiCalls("post","http://localhost:4000/playlist/createPlaylist",
            {
              userId:user._id,
              name: inputSongRef.current.value,
              songs:[]
            })
            .then(setEnterName(!enterName))
        }
    }
   
  return (
    <div className={styles.addPlaylist} >
     
         {enterName ?<>
         <BiArrowBack className={styles.back} onClick={()=>setEnterName(!enterName)}/>
          <div className={styles.enterName}>
             <p>enter name:</p> 
             <input className={styles.input} ref={inputSongRef} onKeyPress={createPlaylist}/>
          </div>
         </>
         :<SiAddthis className={styles.addSym}  onClick={()=>setEnterName(!enterName)}/>}
  </div>
  )
}

export default AddPlaylist