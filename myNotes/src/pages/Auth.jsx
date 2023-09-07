import React, { useEffect } from 'react'
import Cookies from "universal-cookie";
import { Navigate, useSearchParams } from 'react-router-dom'
import instance from '../axiosfile/baseUrl';



const Auth = () => {
    const [useparams] = useSearchParams();
    const cookie = new Cookies();

    useEffect(() => {
        console.log("params token", useparams.get("token"))
        instance.post('/user/authHome',
            { token: useparams.get("token") }).then((response) => {
                console.log("receiving token to be stored", response.data)
                cookie.set("sessionToken", response.data);
            })

    }, [])
    return <Navigate to="/home" replace />
}

export default Auth