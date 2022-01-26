import React, { useState } from "react";

import Header from "./Header";
import GameBoard from "./GameBoard";
import Control from "./Control";
import { findWinner } from "./findWinner";
import Result from "./Result";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [score, setScore] = useState({ X: 0, O: 0, draw: 0 });
  const [isXNext, setIsXNext] = useState(true);

  var winner = findWinner(board);
  function handleChose(index) {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = isXNext ? "X" : "O";
    setBoard(boardCopy);
    setIsXNext(!isXNext);
  }

  const handleReset = () => {
    if (winner) {
      const copyScore = { ...score };
      copyScore[winner] += 1;
      setScore(copyScore);
    }
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="container p-5 flex flex-col h-screen max-w-lg min-w-min flex-wrap font-bold">
      <Header score={score} />
      <GameBoard board={board} onClick={handleChose}>
        {winner && <Result winner={winner} />}
      </GameBoard>
      <Control
        onClick={handleReset}
        turn={isXNext ? "X" : "O"}
        winner={winner}
      />
    </div>
  );
}

export default TicTacToe;
