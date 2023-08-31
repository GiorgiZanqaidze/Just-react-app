
import { useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListPage () {

    const baseApi = 'https://api.github.com'

    const [user, setUser] = useState({})

    const location = useLocation();

    useEffect(() => {

        axios.get(`${baseApi}/users${location.pathname}`).then(res => setUser(res.data)).catch(err => console.log(err))

    }, [])

    console.log(user)
    return (
        <div>
            <p>{user && user.login}</p>
            <img src={user && user.avatar_url} alt='user'/>
            <p>{user.name}</p>
        </div>
    )
}