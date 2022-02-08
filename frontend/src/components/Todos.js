import React from 'react';
import Todo from './Todo.js';
import EditButton from './EditButton.js';
import DeleteButton from './DeleteButton.js';


function Todos(props) {
    let data = props.data || [];

    let todoMap = [];
    
    const listStyle = {
        margin: "0",
        paddingLeft: "0",
        border: "black 0.5px solid",
        listStyleType: "none"
    }
    
    const todoStyle = {
        display: "grid",
        gridTemplateColumns: "15fr 1fr",
        justifyContent: "left",
        paddingLeft: "0.5rem"
    }

    if (data.length > 0) {
        todoMap = data.map((todo, i) => {
            return (
                <div key={todo._id} id={todo._id} style={todoStyle}>
                    <Todo data={todo.todo} key={todo._id}/>
                    <div style={{display: "flex"}}>
                        <EditButton id={todo._id}/>
                        <DeleteButton id={todo._id} />
                    </div>
                </div>
            )

        })
    }
    else {
        todoMap = [<div key={98} ></div>]
    }

    return (
        <ul className="todos" style={listStyle} >
            {todoMap}
        </ul>
    )
}

export default Todos;