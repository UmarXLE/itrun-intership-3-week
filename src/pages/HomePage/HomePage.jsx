import React from 'react';
import styles from './homepage.module.css'
import Header from '../../components/Header/Header';
import Todos from '../../components/Todos/Todos';
import Button from '@mui/material/Button';


const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header path="/create" name="Create ToDo"/>
           
            <Todos />
        </div>
    );
};

export default HomePage;