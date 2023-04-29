import React, { useContext, useEffect, useState } from 'react';
import styles from './todos.module.css'
import TodoItem from '../TodoItem/TodoItem';
import axios from 'axios'
import Button from '@mui/material/Button';
import { CustomContext } from '../../utils/Context';


const Todos = () => {
    const {todos,setTodos, getAllTodos, status, setStatus, checked , setChecked } = useContext(CustomContext)
    

    useEffect(()=>{
        getAllTodos()
    },[status])

    
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/todos/${id}`)
        .then((res) => getAllTodos())
    }


   
    return (
        <>
             <div className={styles.filter}>
                <Button variant="outlined" onClick={() => setStatus('all')}>Все</Button>
                <Button color='success' variant="outlined" onClick={() => setStatus('done')}>Выполненные</Button>
            </div>

            <div className={styles.wrapperTodos}>
            {
                todos.filter((el) => {
                    if(status === 'done'){
                         return el.isDone === true
                    } else {
                        return  el 
                    }
                }).map(todo => {
                    return <TodoItem
                        key = {todo.id} 
                        id = {todo.id}
                        title = {todo.title}
                        isDone = {todo.isDone}
                        handleDelete = {() => handleDelete(todo.id)}
                    />
                })
            }
        </div>
        </>
       
    );
};

export default Todos;