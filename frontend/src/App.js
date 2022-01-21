import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './components/Menu.js';
import Schedule from './components/Schedule.js';
import TodoForm from './components/TodoForm.js';

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path='/' element={<Schedule family={true} week={false} today={true}/>} />
          <Route path='/schedules/name/:name' element={<Schedule family={false} week={true} today={false}/>} />
          <Route path='/schedules/day/:day' element={<Schedule family={true} week={false} today={false}/>} />
          <Route path='/schedules' element={<Schedule family={true} week={true} today={false}/>} />
          <Route path='/schedules/name/:name/day/:day' element={<Schedule family={false} week={false} today={false}/>} />
          <Route path='/schedules/day/:day/name/:name' element={<Schedule family={false} week={false} today={false}/>} />
          <Route path='/todos/:id' element={<TodoForm newTodo={false} />} />
          <Route path='/todos/new' element={<TodoForm newTodo={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
