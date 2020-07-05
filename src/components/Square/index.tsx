import React from "react";

import "./styles.css";

type SquareValue = "X" | "O" | null;

interface SquareProps {
  onClick(): void;
  value: SquareValue;
}

const Square: React.FC<SquareProps> = (props) => {
  return (
    <div className={`square ${props.value}`} onClick={props.onClick}>
      {props.value}
    </div>
  );
};

export default Square;
