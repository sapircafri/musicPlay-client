import React, { useEffect, useState } from 'react'
import styles from './style.module.css'

import Header from '../Header'
import Main from '../Main'
import SideBar from '../SideBar'
import axios from "axios";
import { Route, Routes } from 'react-router-dom'


function Layout() {
    const [songs,setSongs]=useState([]);
    const[search,setSearch]=useState("חנן בן ארי");

    // const searchSong = (value) => {
    //   setSearch(value)
    //   console.log(value);
    // }
  
    useEffect(() => {
      const options = {
        params: {query:search  , safesearch: 'false'},
        headers: {
          'X-RapidAPI-Key': 'bf48ce99a1mshd741b2de5c3b8e5p14a7fejsn24fb17707014',
          'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
        }
      };
      axios.get('https://simple-youtube-search.p.rapidapi.com/search', options).then(function (response) {
        console.log(response.data);
        setSongs (response.data.results)
      }).catch(function (error) {
        console.error(error);
      });
      
  },[search]);


  return (
    <div>
      <div>
        <Header setSearch={setSearch} />
      </div>
      <div className={styles.side_main}>
        <SideBar/>
        <Main songs={songs}/>
      </div>
    </div>
  )
}

export default Layout