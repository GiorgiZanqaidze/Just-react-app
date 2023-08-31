import ListItem from "../components/ListItem";
import {useSelector, useDispatch} from "react-redux";
import {ListItemsActions} from "../store/list-items";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function HomePage() {

    const baseApi = 'https://api.github.com'

    const [users, setUsers] = useState()

    useEffect(() => {
        axios.get(`https://api.github.com/search/users?q=followers:%3E1000&sort=followers&order=desc&per_page=10`)
            .then((res) => setUsers(res.data.items))
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        axios.get(`https://api.github.com/users/Giorgi2`)
            .then((res) => console.log(res))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    const showSingleUser = (login) => {
        navigate(login);
    }



    const User = ({user}) => (
        <div className="user">
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className='w-64'/>
            <button onClick={() => showSingleUser(`/${user.login}`)}>{user.login}</button>
            <p>{user.type}</p>
        </div>
    );



    const handleSubmit = (values) => {
        showSingleUser(values.name)
    }

    const formikInitialValues = { name: "" };

    return (
        <div className='mt-5 grid grid-cols-4'>
            <div>
                <Formik initialValues={formikInitialValues} onSubmit={(values) => handleSubmit(values)}>
                    <Form>
                        <Field type="text" name="name" className="border-4" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
            <div>
                {users && users.map(user => (
                    <User key={user.id} user={user}/>
                ))}
            </div>

        </div>
    );
}

export default HomePage;
