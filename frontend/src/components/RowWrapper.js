import React from 'react';
import Name from './Name.js';
import TodosWrapper from './TodosWrapper';

function RowWrapper(props) {
    let week = props.week || false;
    let today = props.today || false;

    const rowWrapperStyle = {
        display: "flex",
        flexDirection: "column"
    }

    const todosWrapperStyle = {
        display: "flex",
        justifyContent: "center",
        border: "solid blue 1px"
    }

    return (
        <div className="row-wrapper" style={rowWrapperStyle}>
            <div style={todosWrapperStyle}>
                <Name />
                <TodosWrapper week={week}/>
            </div>
        </div>
    )
}

export default RowWrapper;