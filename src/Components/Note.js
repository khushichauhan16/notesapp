import Delete from "@mui/icons-material/Delete";

function Note({ id, text, deleteNote }) {
  return (
    <div className="note">
      <div className="noteBody">{text}</div>
      <div className="noteFooter" style={{ justifyContent: "flex-end" }}>
        <Delete
          className="noteDelete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></Delete>
      </div>
    </div>
  );
}

export default Note;
