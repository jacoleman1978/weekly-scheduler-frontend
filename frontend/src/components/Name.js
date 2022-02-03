import React from 'react';

function Name(props) {
    const nameStyle = {
        border: "solid black 1px"
    }
    
    return (
        <div className="name" style={nameStyle}>
            {props.name}
        </div>
    )
}

export default Name;