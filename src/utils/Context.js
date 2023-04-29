import { createContext , useState } from "react";
import axios from 'axios'

export const CustomContext = createContext()

export const Context = (props) => {
    const [idPost , setIdPost] = useState(0)
    // const [done, setDone] = useState(false)
    const [todos , setTodos] = useState([])
    const [status , setStatus] = useState('all')

    const getAllTodos = () => {
        axios.get('http://localhost:3001/todos')
            .then(res => setTodos(res.data))
    }

    

    const handleDone = async(idPost, done) => {
        console.log(idPost)
        console.log(done)
        console.log('выполнено!')
        // setDone(!done)
         await axios.patch(`http://localhost:3001/todos/${idPost}`, {isDone: !done})
            .then(res => {
                console.log(res.data.isDone)
                getAllTodos()
            })
    }
    
    const value = { 
        handleDone,
        setIdPost,
        idPost,
        todos, setTodos,
        status, setStatus,
        getAllTodos
        // done,setDon
    }

    return <CustomContext.Provider value={value}>
        {
            props.children
        }
    </CustomContext.Provider>
}