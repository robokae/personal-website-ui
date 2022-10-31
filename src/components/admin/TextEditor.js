import { useState } from "react";
import "./TextEditor.scss";

const TextEditor = ({ submitHandler, discardHandler, saveHandler }) => {
  const [text, setText] = useState("");
  const [numChars, setNumChars] = useState(0);
  const [numWords, setNumWords] = useState(0);

  let numCharsSuffix = "character";
  let numWordsSuffix = "word";

  const updateTextInput = (e) => {
    let input = e.target.value;
    let charCount = input.length;
    let wordCount = input.split(" ").filter((w) => w !== "").length;

    setNumChars(charCount);
    setNumWords(wordCount);
    setText(input);
  };

  const getGramaticallyCorrectSuffix = (suffix, len) => {
    return len === 1 ? suffix : suffix + "s";
  };

  return (
    <div className="text-editor">
      <div className="text-editor__text-input-container">
        <textarea
          className="text-editor__text-input"
          onChange={updateTextInput}
        />
      </div>
      <div className="text-editor__options-container">
        <div className="text-editor__status-container">
          <p className="text-editor__num-words">
            {numChars} {getGramaticallyCorrectSuffix(numCharsSuffix, numChars)}{" "}
            | {numWords}{" "}
            {getGramaticallyCorrectSuffix(numWordsSuffix, numWords)}
          </p>
        </div>
        <div className="text-editor__action-buttons-container">
          <button
            className="text-editor__action-button text-editor__action-button--warning"
            onClick={discardHandler}
          >
            Discard
          </button>
          <button
            className="text-editor__action-button"
            onClick={() => submitHandler(text)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
