import React from "react";

export const TodoList = (props) => {
  return (
    <li className="group flex justify-between items-center p-2 hover:bg-gray-100">
      <input
        type="radio"
        className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600"
      />
      <label className="flex-1 mx-4">{props.item}</label>
      <button
        className="opacity-0 group-hover:opacity-100 rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
          props.deleteItem(props.index);
        }}
      >
        <i className="bg-green-400 m-3 p-3">X</i>
      </button>
    </li>
  );
};
