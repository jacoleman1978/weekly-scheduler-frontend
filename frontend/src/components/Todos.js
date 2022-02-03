import React from 'react';
import Todo from './Todo.js';
import EditButton from './EditButton.js';
import DeleteButton from './DeleteButton.js';

function Todos(props) {
    let week = props.week || false;

    const todosStyle = {
        display: "flex",
        
    }

    const todoStyle = {
        display: "flex",
        justifyContent: "center",
        border: "solid black 1px"
    }
    
    return (
        <div className="todos" style={todoStyle}>
            <Todo />
            <EditButton />
            <DeleteButton />
        </div>
    )
}

export default Todos;