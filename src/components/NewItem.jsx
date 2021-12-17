import React, { useRef, useState } from "react";
import classes from "./newItem.module.css";

function NewItem(props) {
  const textInputRef = useRef(null);
  const [text, setText] = useState("");

  const textChangeHandler = () => {
    const textareaValue = textInputRef.current.value;
    if (textareaValue.length <= 40) {
      setText(textareaValue);
    }
  };

  return (
    <div className={classes.backdrop}>
      <div className={classes.inputBox}>
        <h2 className={classes.boxHeader}>Add your new To-Do item.</h2>
        <p className={classes.letterLimit}>
          You have {40 - text.length} characters left.
        </p>
        <textarea
          value={text}
          className={classes.newItem}
          ref={textInputRef}
          onChange={textChangeHandler}
        />
        <button
          className={classes.submit}
          onClick={() => {
            props.addToDoHandler(text);
          }}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default NewItem;
