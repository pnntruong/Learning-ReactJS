import React from "react";

function Cell({ onClick, turn }) {
  const turnColor = turn === "X" ? "text-blue-400" : "text-red-400";
  return (
    <div
      className={`shadow-lg h-32 w-28 flex justify-center items-center text-6xl select-none ${turnColor}`}
      onClick={onClick}
    >
      {turn}
    </div>
  );
}

export default Cell;
