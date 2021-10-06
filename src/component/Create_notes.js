import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Create_notes = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title:"",
        desc: ""
    })

    const inputEvent = (e)=>{

        const {name, value} = e.target;
        setNote((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

    const addNote = ()=>{
        props.note_event(note)

        setNote({
            title: "",
            desc: ""
        })

    }

    const show= ()=>{
        setExpand(true)
    }

    return (
        <div className="app-row">
        <div className="create-note" onDoubleClick={()=>setExpand(!expand)}>
            <form>
                {
                    expand &&
                <input type="text" name="title" value={note.title}
                 onChange={inputEvent} placeholder="Title" autoComplete="off" />
                
                }
               {expand && <br />} <br />
                <textarea rows="4"  name="desc" value={note.desc}
                 onChange={inputEvent} onClick={show} placeholder="write notes here..." ></textarea><br />
               {
                   expand && <Button variant="contained" color="success" onClick={addNote}>
                   <AddIcon />
               </Button>
               }
                
            </form>
        </div>
        </div>
    )
}

export default Create_notes
