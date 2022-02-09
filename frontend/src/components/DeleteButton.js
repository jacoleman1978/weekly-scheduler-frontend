import React from 'react';
import TodoDataService from '../services/todoService';
import Button from 'react-bootstrap/Button'

function DeleteButton(props) {
    let id = props.id

    let delBtnStyle = {
        padding: "0rem 0.25rem",
        marginLeft: "0.25rem"
    }

    return (
            <Button 
                style={delBtnStyle} className="btn-danger" onClick={() => TodoDataService.deleteTodo(id)}
                ><i className="fas fa-trash-alt"></i>
            </Button>
    )
}

export default DeleteButton;