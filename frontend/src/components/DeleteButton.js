import React from 'react';
import TodoDataService from '../services/todoService';

function DeleteButton(props) {
    let id = props.id

    return (
        <div className="delete-button">
            <button 
                onClick={() => TodoDataService.deleteTodo(id)}
                ><i className="fas fa-trash-alt"></i>
            </button>
        </div>
    )
}

export default DeleteButton;