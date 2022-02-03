import React from 'react';
import DaysHeader from './DaysHeader.js';
import RowWrapper from './RowWrapper.js';
import {useParams} from 'react-router-dom';

function Schedule(props) {
    const params = useParams();
    
    let family = props.family || false;
    let week = props.week || false;
    let today = props.today || false;
    let names = props.names || params.name;
    let days = props.days;
    let dayText = props.dayText || "";
    let rowsMap = [];

    const scheduleRowStyle = {
        display: "flex",
        flexDirection: "column",
        border: "solid red 1px"
    }

    if (family) {
        rowsMap = names.map((name, i) => {
            return (<div key={i}><RowWrapper week={week} today={today} name={name} key={i} dayText={dayText} days={days}/></div>)
        })
    } else {
        rowsMap = [<div key={0}><RowWrapper week={week} today={today} name={params.name} key={0} dayText={dayText} days={days}/></div>]
    }

    return (
        <div className="schedule" style={scheduleRowStyle} >
            <DaysHeader week={week} today={today} dayText={dayText}/>
            {rowsMap}
        </div>
    )
}

export default Schedule;