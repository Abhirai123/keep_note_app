import React from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const Show_notes = (props) => {

    const del_Notes = ()=>{
        props.delete_note(props.id)
    }
    return (
        <div className="show-notes">
            <h4 className="note-title">{props.title}</h4>
            <p>{props.desc}</p>
            <Button variant="contained" color="error" onClick={del_Notes}>
                <DeleteIcon />
            </Button>
        </div>
    )
}

export default Show_notes
