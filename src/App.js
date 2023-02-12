import { createContext, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import apiCalls, { setToken } from './apiRequest';
import './App.css';
import Layout from './components/Layout';
import Playlist from './components/Playlists';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export const userContext = createContext();

function App() {

  const [user, setUser] = useState();
  useEffect(() => {
    const startApp = async () => {
      const haveToken = JSON.parse(localStorage.token);
      if (haveToken) {
        await setToken(haveToken.replace('Bearer ', ''));
        apiCalls("get", 'http://localhost:4000/checkToken')
        .then((res) => {
          setUser(res.data)
        })
      }
    }
    if (!user && localStorage.token) startApp()
  }, [])



  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>

        <Routes>
          {!user && <>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<Navigate to="/" />} />

          </>
          }
          {user && <>
          <Route path="/*" element={<Layout />} />
          </>} 
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
