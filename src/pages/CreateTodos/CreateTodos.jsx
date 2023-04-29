import React, { useState } from 'react';
import styles from './createtodos.module.css'
import Header from '../../components/Header/Header'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom'

const CreateTodos = () => {
    
    const [title , setTitle ] = useState('')
    const navigate = useNavigate()

    const handleCreateTodos  = (e) => {
        console.log(1)
        e.preventDefault(e)
        axios.post('http://localhost:3001/todos',{
            title
        }).then(res => {
            console.log(res.data)
            setTitle("")
            navigate('/')
        })
    }



    return (
        <div className={styles.wrapper}>
            <Header path="/" name= "Home"/>
            <div className={styles.createForm}>
                <form onSubmit={handleCreateTodos}>
                    <TextField pattern="[0-10]+"  required size="small" value={title} onChange={(e) => setTitle(e.target.value)} id="filled-basic" label="Added ToDo" variant="outlined" />
                    <Button type="submit" color='success' variant="contained">
                        Add
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateTodos;