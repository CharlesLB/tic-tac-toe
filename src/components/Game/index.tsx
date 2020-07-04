import React, { useState } from "react";
import "./styles.css";

import Board from "../Board";
import ScoreBoard from "../ScoreBoard";

type SquareValue = "X" | "O" | null;

const Game: React.FC = () => {
  return (
    <div className="game">
        <ScoreBoard />
        <div className="container">
            <Board />
        </div>      
    </div>
  );
};

export default Game;
