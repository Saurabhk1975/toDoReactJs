import React, { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Add task here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="flex-1 border-2 border-gray-300 p-2 mr-2"
      />
      <button
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
