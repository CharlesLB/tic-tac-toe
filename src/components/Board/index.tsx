import React, { ReactNode } from "react";

import Square from "../Square";

import "./styles.css";

type SquareValue = "X" | "O" | null;

interface BoardProps {
  onClick(i: number): void;
  squares: SquareValue[];
}

const Board: React.FC<BoardProps> = (props) => {
  const renderSquare = (i: number): ReactNode => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <div className="container">
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
