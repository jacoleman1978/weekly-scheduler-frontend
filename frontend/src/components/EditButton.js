import React from 'react';

function EditButton() {
    let editBtnStyle = {
        marginLeft: "0.5rem",
        marginRight: "0.5rem"
    }
    
    return (
        <div style={editBtnStyle} className="edit-button">
            <i className="far fa-edit"></i>
        </div>
    )
}

export default EditButton;