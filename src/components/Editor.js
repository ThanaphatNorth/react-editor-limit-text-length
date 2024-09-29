import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = () => {
  const [value, setValue] = useState("");
  const [textLength, setTextLength] = useState(0);
  const quillRef = useRef(null);
  const maxLength = 100;
  // This function is called every time the editor's content changes
  const getPlainText = (editor) => {
    const text = editor.getText();
    return text.trim(); // Removing any leading/trailing spaces or newlines
  };
  const handleChange = (content) => {
    // Ensure the editor instance exists before trying to get the length
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      let plainText = getPlainText(editor);
      let length = plainText.length;
      if (length > maxLength) {
        editor.deleteText(maxLength, length - maxLength);
        setTextLength(maxLength);
      } else {
        setValue(content);
        setTextLength(length);
      }

      // setTextLength(length - 1); // Subtract 1 to exclude the trailing new line
    }
  };

  return (
    <div>
      <ReactQuill ref={quillRef} value={value} onChange={handleChange} />
      <div>Text length: {textLength}</div>
      <div>Max length: {maxLength}</div>
    </div>
  );
};

export default QuillEditor;
