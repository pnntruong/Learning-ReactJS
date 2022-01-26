import React from "react";

function Control({ onClick, turn, winner }) {
  const turnClass = turn === "X" ? "left-0 bg-blue-400" : "right-0 bg-red-400";
  return (
    <div className="self-center flex flex-col">
      {winner ? (
        winner === "draw" ? (
          <div className="my-3 text-2xl">Result is DRAW</div>
        ) : (
          <div className="my-3 text-2xl">
            The winner is{" "}
            <span className={winner === "X" ? "text-blue-400" : "text-red-400"}>
              {winner}
            </span>
          </div>
        )
      ) : (
        <div className="relative rounded-full p-2 h-8 my-3 w-20 flex justify-between border-2 items-center">
          <span className="text-blue-400">X</span>
          <span className="text-red-400">0</span>
          <div
            className={`absolute text-white rounded-full w-10 h-10 flex justify-center items-center ${turnClass}`}
          >
            {turn}
          </div>
        </div>
      )}
      <div className="self-center">
        <button
          onClick={onClick}
          className="border-2 rounded-full p-2 hover:bg-gray-100 focus:outline-none"
        >
          <img
            width={35}
            src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-refresh-arrows-flatarticons-blue-flatarticons.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Control;
