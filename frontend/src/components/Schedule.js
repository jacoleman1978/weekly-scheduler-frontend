import React from 'react';
import DaysWrapper from './DaysWrapper.js';
import RowWrapper from './RowWrapper.js';

function Schedule(props) {
    let family = props.family || false;
    let week = props.week || false;
    let today = props.today || false;
    
    return (
        <div className="schedule">
            Schedule
            <DaysWrapper week={week} today={today}/>
            <RowWrapper week={week} today={today}/>
        </div>
    )
}

export default Schedule;