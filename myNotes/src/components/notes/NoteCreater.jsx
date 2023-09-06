import React from 'react'
import "./note.css";
import DeleteIcon from '@mui/icons-material/Delete';



const NoteCreater = () => {
    return (
        <div className="note">
            <div className="note__body">
                
            </div>
            <div className="note__footer" style={{ justifyContent: "flex-end" }}>
                <DeleteIcon
                    className="note__delete"
                    aria-hidden="true"
                ></DeleteIcon>
            </div>
        </div>
    )
}

export default NoteCreater


