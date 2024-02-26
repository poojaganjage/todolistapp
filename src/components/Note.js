import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({id, title, content, onDelete}) => {
    const handleClick = () => {
        onDelete(id);
    }
    return (
        <div className="note">
            <h1>{title}</h1><br />
            <p>{content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}
export default Note;
