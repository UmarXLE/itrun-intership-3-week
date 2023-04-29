import React, { useContext, useState } from 'react';
import styles from './todoitem.module.css'
import {Link} from 'react-router-dom'
import { CustomContext } from '../../utils/Context';


const TodoItem = (props) => {
    // const [checked , setChecket ] = useState(false)
    const {handleFilter , handleDone , done , setDone} = useContext(CustomContext)
    const [checked , setChecket ] = useState(false)
    
    return (
        <div className={styles.item} style={{
            background: checked ? '#38800e' : '',
            color: checked ? 'white': ''
            }}>
            <div className={styles.text}>
                <input checked={checked} type="checkbox" onChange={() => {
                    handleDone(props.id, props.isDone)
                    console.log(props)
                    setChecket(!checked)    
                    console.log(props.id)
                    }} />
                <h2>{props.title}</h2>
            </div>
            
            <div className={styles.buttons}>
                <Link className={styles.edit} to={`/single/${props.id}`}></Link>
                <button onClick={props.handleDelete} className={styles.delete}></button>
            </div>
           
        </div>
    );
};

export default TodoItem;