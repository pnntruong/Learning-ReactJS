import React from "react";

function Header({ score }) {
  return (
    <div className="container flex">
      <div className="w-1/3 text-center flex flex-col">
        <span className="text-2xl text-blue-600">X</span>
        {score.X} Win
      </div>
      <div className="w-1/3 text-center flex flex-col">
        <span className="text-2xl text-red-600">O</span>
        {score.O} Win
      </div>
      <div className="w-1/3 text-center flex flex-col">
        <span className="text-2xl text-black-600">D</span>
        {score.draw} Draw
      </div>
    </div>
  );
}

export default Header;
