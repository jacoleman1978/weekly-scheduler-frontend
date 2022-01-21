import React from 'react';
import Todo from './Todo.js';
import EditButton from './EditButton.js';
import DeleteButton from './DeleteButton.js';

function Todos(props) {
    let week = props.week || false;
    
    return (
        <div className="todos">
            Todos
            <Todo />
            <EditButton />
            <DeleteButton />
        </div>
    )
}

export default Todos;