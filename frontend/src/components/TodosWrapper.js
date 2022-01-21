import React from 'react';
import Todos from './Todos';

function TodosWrapper(props) {
    let week = props.week || false;

    return (
        <div className="todos-wrapper">
            <Todos week={week} />
        </div>
    )
}

export default TodosWrapper;