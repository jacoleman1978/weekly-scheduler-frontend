import React from 'react';
import Todo from './Todo.js';
import EditButton from './EditButton.js';
import DeleteButton from './DeleteButton.js';

function Todos(props) {
    let week = props.week || false;

    const todosStyle = {
        display: "flex",
        flexDirection: "column"
    }

    const todoStyle = {
        display: "flex",
        justifyContent: "center",
        border: "solid black 1px"
    }
    
    return (
        <div className="todos" style={todosStyle}>
            <div style={todoStyle}>
                Todos:
                <Todo />
                <EditButton />
                <DeleteButton />
            </div>
            
        </div>
    )
}

export default Todos;