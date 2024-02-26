import React, {useState} from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = (props) => {
    const [note, setNote] = useState({title: "", content: ""});
    const [isExpanded, setExpanded] = useState(false);

    const handleChange = (e) => {
        // console.log(e);
        // console.log(e.target);
        // const {name, value} = e.target;
        // console.log(name);
        setNote((prevNote) => {
            return {
                ...prevNote,
                [e.target.name]: e.target.value
            }
        });
    }

    const submitNote = (e) => {
        e.preventDefault();
        props.onAdd(note);
        setNote({title: "", content: ""});
    }

    const handleExpand = () => {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} />}
                <textarea name="content" rows={isExpanded ? 3 : 1} placeholder="Take a note....." value={note.content} onClick={handleExpand} onChange={handleChange} />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}
export default CreateArea;
