import React from 'react';
import {useParams} from 'react-router-dom';
import Todos from './Todos';
import Name from './Name.js';

function RowWrapper(props) {
    const params = useParams();
    let week = props.week || false;
    let today = props.today || false;
    let name = props.name || '';
    let days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    
    let todosDaysMap = [];
    let rowWrapperStyle = {}

    if (week) {
        rowWrapperStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)"
        }

        todosDaysMap = days.map((day, i) => {
            return <Todos day={day} key={i}/> 
        })
    } else if (today) {
        //Need logic to determine day
        todosDaysMap = [<Todos day={"Friday"}/>]
    } else {
        // Temporarily set to 'Thursday'. Remove later.
        rowWrapperStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 7fr",
        }

        todosDaysMap = [<Todos day={params.day || "Thursday"} key={1}/>]
    }

    return (
        <div className="row-wrapper" style={rowWrapperStyle}>
            <Name name={name}/>
            {todosDaysMap}
        </div>
    )
}

export default RowWrapper;