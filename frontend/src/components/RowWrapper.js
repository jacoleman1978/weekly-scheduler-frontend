import React from 'react';
import Name from './Name.js';
import TodosWrapper from './TodosWrapper';

function RowWrapper(props) {
    let week = props.week || false;
    let today = props.today || false;

    return (
        <div className="row-wrapper">
            RowWrapper
            <Name />
            <TodosWrapper week={week}/>
        </div>
    )
}

export default RowWrapper;