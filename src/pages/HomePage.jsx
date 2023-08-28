import ListItem from "../components/ListItem";
import {useSelector, useDispatch} from "react-redux";
import {ListItemsActions} from "../store/list-items";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";

function HomePage() {

    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get('https://api.github.com/users')
            .then((res) => setUsers(res.data))
            .catch(err => console.log(err))
    })


    return (
        <div className='mt-5'>

            <ul>

            </ul>

        </div>
    );
}

export default HomePage;
