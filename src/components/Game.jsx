import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = [...current.squares];

    if (winner || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setHistory([...newHistory, { squares }]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const moves = history.map((step, move) => {
    const desc = move ? `Ir para movimento #${move}` : "Iniciando Jogo";
    return (
      <li key={move} className="list-unstyled">
        <button
          className="btn btn-outline-dark border-0"
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (stepNumber === 9) {
    status = "Empate";
  } else {
    status = `Próximo Jogador(a): ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="">
      <Board squares={current.squares} onClick={handleClick} />
      {status}
      {moves}
    </div>
  );
};

export default Game;
