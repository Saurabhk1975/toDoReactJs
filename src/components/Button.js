import React from "react";

const Button = () => {
  return (
    <div className="w-1/6 flex flex-col my-20 mx-5 ">
      <button className="bg-green-500 text-white w-32 py-3 px-4 mb-2 rounded-lg">
        Click me
      </button>
      <button className="bg-green-500 text-white w-24 px-2 py-2 mx-3 rounded-lg">Small</button>
    </div>
  );
};

export default Button;
