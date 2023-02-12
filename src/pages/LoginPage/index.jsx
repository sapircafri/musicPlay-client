import React, { useContext, useRef, useState } from 'react'
import styles from './style.module.css'
import apiCalls, { setToken } from '../../apiRequest';
import { Link } from 'react-router-dom';
import { GiMusicalNotes } from 'react-icons/gi'
import { userContext } from '../../App';

function LoginPage() {
    const { setUser } = useContext(userContext);

    const [popUpLogin, setPopUpLogin] = useState("hide");
    const loginPopUp = () => {
        setPopUpLogin("login_popup")
        setTimeout(() => setPopUpLogin("hide"), 2000)
    }

    const loginClick = async (e) => {
        e.preventDefault();
        apiCalls("post", 'http://localhost:4000/login', {
            email: e.target.email.value,
            password: e.target.password.value
        })
            .then((res) => {
                if (res.data) {
                    setToken(res.data[1])
                    setUser(res.data[0])
                    // console.log(res.data[0]);
                    // navigate('/spotify')
                    localStorage.token = JSON.stringify("Bearer " + res.data[1]);
                }
                else {
                    console.log("adas"); 
                }
            })
            .catch((error) => {
                loginPopUp();

                console.log(error);
            });
    }


    return (
        <div className={styles.loginPage}>
            <div className={styles.symbol_icon}>
                <GiMusicalNotes className={styles.icon} />
                <p className={styles.symbol}>music<span>Play</span></p>
            </div>

            <form className={styles.login_container} onSubmit={loginClick}>
                <h1> Login</h1>
                <input name='email' required className={styles.login} type="email" placeholder='Email' />
                <input name='password' required className={styles.login} type="password" placeholder='password' />
                <button className={styles.button_login}>Login</button>
                <div className='sign-up'>Don't have an account? <Link to="/RegisterPage">Sign Up</Link></div>

            </form>

            <div className={styles[popUpLogin]}>
                <h3>login failed</h3>
                <p>username or password incorrect</p>
            </div>

        </div>
    )
}

export default LoginPage