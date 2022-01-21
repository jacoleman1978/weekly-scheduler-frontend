import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './Menu.js';
import Home from './Home.js';
import NameSchedule from './components/NameSchedule.js';
import DaySchedule from './components/DaySchedule.js';
import FamilySchedule from './components/FamilySchedule.js';
import NameDayTodos from './components/NameDayTodos.js';
import EditTodo from './components/EditTodo.js';
import NewTodo from './components/NewTodo.js';

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/schedules/name/:name' element={<NameSchedule />} />
          <Route path='/schedules/day/:day' element={<DaySchedule />} />
          <Route path='/schedules' element={<FamilySchedule />} />
          <Route path='/schedules/name/:name/day/:day' element={<NameDayTodos />} />
          <Route path='/schedules/day/:day/name/:name' element={<NameDayTodos />} />
          <Route path='/todos/:id' element={<EditTodo />} />
          <Route path='/todos/new' element={<NewTodo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
