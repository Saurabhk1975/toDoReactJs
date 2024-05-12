import React, { useState } from "react";
import TodoInput from "./TodoInput";
import { TodoList } from "./TodoList";
import Button from "./Button";

const Body = () => {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex justify-center items-start">
        <Button />
      </div>
      <div className="w-1/4 mx-4 my-10">
        <h2 className="text-xl font-bold mb-4">Todo</h2>
        <div>
          <div className="bg-white shadow-lg h-full mt-2">
            <ul className="list-disc">
              {listTodo.map((listItem, i) => (
                <TodoList
                  key={i}
                  index={i}
                  item={listItem}
                  deleteItem={deleteListItem}
                />
              ))}
            </ul>
          </div>
          <div className="bg-white  h-24 my-2">
            <TodoInput addList={addList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
