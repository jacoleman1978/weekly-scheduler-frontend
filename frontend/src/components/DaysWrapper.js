import React from 'react';
import Day from './Day.js';

function DaysWrapper(props) {
    let week = props.week || false;
    let today = props.today || false;
    
    const daysWrapperStyle = {
        display: "flex",
        justifyContent: "center",
        border: "solid green 1px"
    }

    return (
        <div className="days-wrapper" style={daysWrapperStyle}>
 
            <Day week={week} today={today}/>
        </div>
    )
}

export default DaysWrapper;