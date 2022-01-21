import React from 'react';
import Day from './Day.js';

function DaysWrapper(props) {
    let week = props.week || false;
    let today = props.today || false;
    
    return (
        <div className="days-wrapper">
            DaysWrapper
            <Day week={week} today={today}/>
        </div>
    )
}

export default DaysWrapper;