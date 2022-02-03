import React from 'react';
import Todo from './Todo.js';
import EditButton from './EditButton.js';
import DeleteButton from './DeleteButton.js';

function Todos(props) {
    const todoStyle = {
        display: "grid",
        gridTemplateColumns: "15fr 1fr",
        justifyContent: "left",
        border: "solid black 1px",
        paddingLeft: "0.5rem"
    }
    
    return (
        <div className="todos" style={todoStyle}>
            <Todo />
            <div style={{display: "flex"}}>
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    )
}

export default Todos;