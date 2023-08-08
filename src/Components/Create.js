export default function Create({ textHandler, saveHandler, inputText }) {
  //character limit
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="note__footer">
        <div className="label">{charLeft}  left</div>
        <button className="noteSave" onClick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}


