import React from 'react';
import DaysHeader from './DaysHeader.js';
import RowWrapper from './RowWrapper.js';

function Schedule(props) {
    let family = props.family || false;
    let week = props.week || false;
    let today = props.today || false;
    let names = ["Annora", "Anders", "Lainey", "Cadigan", "Emily", "Adele", "Jamie"];
    let rowsMap = [];
    
    //Delete setting week to true and family to true
    family = true
    week = false
    today = false

    const scheduleRowStyle = {
        display: "flex",
        flexDirection: "column",
        border: "solid red 1px"
    }

    if (family) {
        rowsMap = names.map((name, i) => {
            return (
                <div name={name} key={i}> 
                    <RowWrapper week={week} today={today} name={name}/>
                </div>
            )
        })
    }

    return (
        <div className="schedule" >
            <div style={scheduleRowStyle}>
                <DaysHeader week={week} today={today}/>
                {rowsMap}
            </div>
            
        </div>
    )
}

export default Schedule;