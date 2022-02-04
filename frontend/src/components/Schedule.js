import React, {useState, useEffect} from 'react';
import DaysHeader from './DaysHeader.js';
import RowWrapper from './RowWrapper.js';
import {useParams} from 'react-router-dom';
import TodoDataService from '../services/todoService';

function Schedule(props) {
    const params = useParams();
    let [todoArr, setTodoArr] = useState([])
    
    let family = props.family;
    let week = props.week;
    let today = props.today;
    let names = props.names || "";
    let name = params.name || "";
    let days = props.days;
    let dayText = props.dayText || "";
    let rowsMap = [];

    const scheduleRowStyle = {
        display: "flex",
        flexDirection: "column",
        border: "solid red 1px"
    }
    
    useEffect(() => {
        TodoDataService.getAll().then(response => {setTodoArr(response.data)})     
    },[])
    
    if (family && week) {
        rowsMap = names.map((name, i) => {
            let filteredTodos = todoArr.filter(todo => {
                return todo.name === name
            })
            return (<div key={i}><RowWrapper week={week} today={today} name={name} key={i} days={days} data={filteredTodos}/></div>)
        })
    } else if (today) {
        let filteredTodosDay = todoArr.filter(todo => {
            return todo.day === dayText
        })
        rowsMap = names.map((name, i) => {
            let filteredTodos = filteredTodosDay.filter(todo => {
                return todo.name === name
            })
            return (<div key={i}><RowWrapper week={week} today={today} name={name} key={i} dayText={dayText} data={filteredTodos}/></div>)
        })
    } else {
        let filteredTodos = todoArr.filter(todo => {
            return todo.name === name
        })
        rowsMap = [<div key={0}><RowWrapper week={week} today={today} name={name} key={0} days={days} data={filteredTodos}/></div>]
    }

    return (
        <div className="schedule" style={scheduleRowStyle} >
            <DaysHeader week={week} today={today} dayText={dayText}/>
            {rowsMap}
        </div>
    )
}

export default Schedule;