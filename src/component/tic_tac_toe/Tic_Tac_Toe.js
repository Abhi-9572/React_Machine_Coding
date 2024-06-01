import React, { useState } from "react";
import "./Tic_Tac_Toe.css";

const initialMetaData = Array(9)?.fill(null);
console.log({ initialMetaData });

function TicTacToe() {
  // const {handleClick}=
  const [metaData, setMetaData] = useState(initialMetaData);

  return (
    <div className="board_wrapper">
      <h3>Player X turns</h3>
      <div className="__board">
        {metaData?.map((item, index) => (
          <button></button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
