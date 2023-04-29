import React, { useContext, useEffect , useState } from 'react';
import styles from './singletodopage.module.css'
import {useParams } from 'react-router-dom'
import Header from '../../components/Header/Header';
import TodoItem from '../../components/TodoItem/TodoItem';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import { CustomContext } from '../../utils/Context';



const SingleTodoPage = (props) => {
    const {idPost , setIdPost} = useContext(CustomContext)
    const [todo , setTodo ] = useState({})
    const [newTitle , setNewTitle ] = useState('')
    const paramsURL = useParams()
    const postId = paramsURL.id
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3001/todos/${postId}`)
            .then(res => setTodo(res.data))
    },[])

    const handleChange = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:3001/todos/${postId}`,{
            title:newTitle 
        }).then(() => {
            alert('Todo edit success')
            return navigate('/')
        })
    }
    
    return (
        <div className={styles.wrapper}>
            <Header />

            <div className={styles.wrapperTodo}>
                <TodoItem 
                    id = {todo.id}
                    title = {todo.title}
                />
            </div>

            <form className={styles.form} onSubmit={handleChange}>
                <TextField onChange={(e)=> {
                    setIdPost(postId)
                    setNewTitle(e.target.value)
                }} size='small' id="outlined-basic" label={todo.title} variant="outlined" required />
                <Button type='submit' variant="outlined">Save</Button>
            </form>

        </div>
    );
};

export default SingleTodoPage;