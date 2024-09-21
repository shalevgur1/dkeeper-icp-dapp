import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [createNoteArea, setCreateNoteArea] = useState({
    inputing: false,
    rows: 1
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function pressTextArea() {
    setCreateNoteArea({
      inputing: true,
      rows: 3
    });
  }

  return (
    <div>
      <form className="create-note">
        {createNoteArea.inputing ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={pressTextArea}
          value={note.content}
          placeholder="Take a note..."
          rows={createNoteArea.rows}
        />
        <Zoom in={createNoteArea.inputing}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
