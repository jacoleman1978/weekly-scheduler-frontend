import React from 'react';
import {useParams} from 'react-router-dom';

function DaysWrapper(props) {
    const params = useParams();
    let week = props.week || false;
    let today = props.today || false;
    let daysMap = []

    let currentDay
    
    let daysWrapperStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)"
    }

    let dayStyle = {
        border: "green solid 1px"
    }

    if (week) {
        let days = ["" , "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

        daysMap = days.map((day, i) => {
            return (
                <div style={dayStyle} key={i}>
                    {day}
                </div>
            ) 
        })
    } else if (today) {
        //Need logic to determine day
        daysMap = {currentDay}
    } else {
        // Temporarily set to 'Thursday'. Remove later.
        daysWrapperStyle = {
            display: "grid",
            gridTemplateColumns: "1fr 7fr",
        }

        daysMap = [<div key={"placeholder"}></div>, <div style={dayStyle} key={1}>{params.day || "Thursday"}</div>]
    }

    return (
        <div className="days-wrapper" style={daysWrapperStyle}>
            {daysMap}
        </div>
    )
}

export default DaysWrapper;