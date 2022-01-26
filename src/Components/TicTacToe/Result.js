import React from "react";

export default function Result({ winner }) {
  const popUpTheme = (winner) => {
    switch (winner) {
      case "X":
        return "border-blue-400";
      case "O":
        return "border-red-400";
      default:
        return "border-black";
    }
  };
  return (
    <div
      style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
      className={`absolute rounded-lg bg-gray-100 shadow-2xl border-4 flex justify-center items-center text-3xl px-3 py-4 pointer-events-none ${popUpTheme(
        winner
      )}`}
    >
      {winner === "draw" ? (
        <div>Result is DRAW</div>
      ) : (
        <div>
          The winner is{" "}
          <span className={winner === "X" ? "text-blue-400" : "text-red-400"}>
            {winner}
          </span>
        </div>
      )}
    </div>
  );
}
