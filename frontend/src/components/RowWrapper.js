import React from 'react';
import {useParams} from 'react-router-dom';
import Todos from './Todos';
import Name from './Name.js';

function RowWrapper(props) {
    const params = useParams();

    let week = props.week || false;
    let today = props.today || false;
    let name = props.name || '';
    let days = props.days || "Friday";
    let dayText = props.dayText || "";
    let data = props.data || [];
    
    let todosDaysMap = [];
    let rowWrapperStyle = {};

    if (week) {
        rowWrapperStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)"
        }

        todosDaysMap = days.map((day, i) => {
            let todosByDay = data.filter((todo) => {
                return todo.day === day
            })
            return <Todos day={day} name={name} key={i} data={todosByDay}/> 
        })
    } else if (today) { 
        rowWrapperStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 7fr",
        }

        todosDaysMap = [<Todos day={dayText} name={name} key={1} data={data}/>]
    } else {
        rowWrapperStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 7fr",
        }
        let todosByDay = data.filter((todo) => {
            return todo.day === params.day
        })
        todosDaysMap = [<Todos day={params.day} name={name} key={1} data={todosByDay}/>]
    }

    return (
        <div className="row-wrapper" style={rowWrapperStyle}>
            <Name name={name}/>
            {todosDaysMap}
        </div>
    )
}

export default RowWrapper;