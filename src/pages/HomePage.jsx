import ListItem from "../components/ListItem";
import {useSelector, useDispatch} from "react-redux";
import {ListItemsActions} from "../store/list-items";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const baseApi = 'https://api.github.com'

    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get(`${baseApi}/users`)
            .then((res) => setUsers(res.data))
            .catch(err => console.log(err))
        console.log(users)
    }, [])

    const navigate = useNavigate();
    const showSingleUser = (login) => {
        navigate(login);
    }

    const User = ({user}) => (
        <div className="user">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className='w-64'/>
            <button onClick={() => showSingleUser(`/users/${user.login}`)}>{user.login}</button>
        </div>
    );

    return (
        <div className='mt-5 grid grid-cols-4'>
            {users && users.map(user => (
                <User key={user.id} user={user}/>
            ))}
        </div>
    );
}

export default HomePage;
