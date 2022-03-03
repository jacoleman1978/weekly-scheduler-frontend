import React from 'react';

function Todo(props) {
    let todo = props.data

    let todoStyle ={
        textAlign: "left"
    }
    
    return (
        <li className="todo" style={todoStyle}>
            {todo}
        </li>
    )
}

export default Todo;