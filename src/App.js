import './App.css';
import CreateTodos from './pages/CreateTodos/CreateTodos';
import HomePage from './pages/HomePage/HomePage';
import {Route , Routes} from 'react-router-dom'
import SingleTodoPage from './pages/SingleTodoPage/SingleTodoPage';

function App() {
  return (
    <div className="App">
        <Routes>
           <Route path="/" element={<HomePage />}/>
           <Route path="/create" element={<CreateTodos />}/>
           <Route path="/single/:id" element={<SingleTodoPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
