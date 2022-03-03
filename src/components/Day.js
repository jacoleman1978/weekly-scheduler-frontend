import React from 'react';

function Day(props) {
    let day = props.day;

    let dayStyle = {
        border: "green solid 1px"
    }
    
    return (
        <div style={dayStyle}>
            {day}
        </div>
    )
}

export default Day;