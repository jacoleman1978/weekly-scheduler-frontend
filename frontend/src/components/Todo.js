import React from 'react';

function Todo() {
    let todoStyle ={
        display: "flex", 
        justifyContent: "left"
    }
    
    return (
        <div className="todo" style={todoStyle}>
            Todo
        </div>
    )
}

export default Todo;