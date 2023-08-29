
import { useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

export default function ListPage () {

    const baseApi = 'https://api.github.com'

    const [user, setUser] = useState({})

    const location = useLocation();

    useEffect(() => {

        axios.get(`${baseApi}${location.pathname}`).then(res => setUser(res.data)).catch(err => console.log(err))

    }, [])
    return (
        <p>{user && user.login}</p>
    )
}