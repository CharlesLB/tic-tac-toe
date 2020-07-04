import React, { ReactNode } from "react";

import Square from "../Square";

import "./styles.css";

type SquareValue = "X" | "O" | null;

const Board: React.FC = () => {
  return (
    <div className="board">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  );
};

export default Board;
