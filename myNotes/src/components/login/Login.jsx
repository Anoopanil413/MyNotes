import React, { useState } from 'react'
import './logi.css'
import instance from '../../axiosfile/baseUrl';

const Login = () => {
    const [email, setEmail] = useState("");
    const login = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(email);
        if (isValidEmail) {
            instance.post('/user/login', { email }).then((res) => {
                console.log(res, "doine")
                setEmail("")
                alert("please check your mail")
            })
        }

    };

    return (
        <div className='logmain'>
            <div className="formContainer">
                <div className="title">
                    <h1> Sign Up</h1>
                </div>
                <div className="body">
                    <p> Enter your email to sign up.</p>
                    <input
                        type="email"
                        placeholder="Email..."
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <button onClick={login}> Login </button>
                </div>
            </div>
        </div>
    )
}

export default Login