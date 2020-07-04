import React from "react";

import './styles.css';

const ScoreBoard: React.FC = () => {
  return (
    <div className="scoreboard">
      <div className="card">
        <span>0</span>
      </div>
      <div className="card">
        <span>0</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
