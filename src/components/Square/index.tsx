import React from "react";

import "./styles.css";

type SquareValue = "X" | "O" | null;

const Square: React.FC = () => {
  return (
    <div className="square O">
        X
    </div>
  );
};

export default Square;
