import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './components/Menu.js';
import Schedule from './components/Schedule.js';
import TodoForm from './components/TodoForm.js';

function App() {
  let names = ["Annora", "Anders", "Lainey", "Cadigan", "Emily", "Adele", "Jamie"];
  let days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  let dayText = "";

  switch (new Date().getDay()) {
      case 0:
        dayText = "Sunday";
        break;
      case 1:
        dayText = "Monday";
        break;
      case 2:
          dayText = "Tuesday";
        break;
      case 3:
        dayText = "Wednesday";
        break;
      case 4:
        dayText = "Thursday";
        break;
      case 5:
        dayText = "Friday";
        break;
      case 6:
        dayText = "Saturday";
        break;
      default:
        dayText = "";
  }
  
  return (
    <div className="App">
      <Menu names={names} days={days}/>
      <Router>
        <Routes>
          <Route path='/' element={<Schedule days={days} names={names} family={true} week={false} today={true} dayText={dayText}/>} />
          <Route path='/schedules/name/:name' element={<Schedule days={days} family={false} week={true} today={false}/>} />
          <Route path='/schedules/day/:day' element={<Schedule days={days} names={names} family={true} week={false} today={false}/>} />
          <Route path='/schedules' element={<Schedule days={days} names={names} family={true} week={true} today={false}/>} />
          <Route path='/schedules/name/:name/day/:day' element={<Schedule family={false} week={false} today={false}/>} />
          <Route path='/schedules/day/:day/name/:name' element={<Schedule family={false} week={false} today={false}/>} />
          <Route path='/schedules/todos/:id' element={<TodoForm newTodo={false} />} />
          <Route path='/schedules/todos/new' element={<TodoForm newTodo={true} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
