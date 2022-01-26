import React from "react";
import Cell from "./Cell";

function GameBoard({ board, onClick, children }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1 mt-10 cursor-pointer relative">
      {board.map((cell, index) => {
        return <Cell key={index} onClick={() => onClick(index)} turn={cell} />;
      })}
      {children}
    </div>
  );
}

export default GameBoard;
