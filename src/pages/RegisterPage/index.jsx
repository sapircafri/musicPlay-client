import React from 'react'
import styles from './style.module.css'
import axios from "axios";
import apiCalls from '../../apiRequest';

function RegisterPage() {
    const onSubmit = (e) => {
        e.preventDefault();
        apiCalls("post", 'http://localhost:4000/sign-up', {
            
                fname: e.target.fname.value,
                lname: e.target.lname.value,
                email: e.target.email.value,
                username: e.target.username.value,
                password: e.target.password.value,
        })
        .then((res) => console.log(res))
    }
    return (
        <div className={styles.registerPage}>
            <form className={styles.register_container} onSubmit={onSubmit}>
                <h1> Register</h1>
                <input name='fname' required className={styles.login} type="text" placeholder='First Name' />
                <input name='lname' required className={styles.login} type="text" placeholder='Last Name' />
                <input name='email' required className={styles.login} type="text" placeholder='Email' />
                <input name='username' required className={styles.login} type="text" placeholder='UserName' />
                <input name='password' required className={styles.login} type="password" placeholder='Password' />
                <button className={styles.button_login}>submit</button>
            </form>
        </div>
    )
}

export default RegisterPage