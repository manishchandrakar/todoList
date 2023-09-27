import React from 'react';
import '../styles/ResetButton.css';


function ResetButton({ resetTodos }) {
  return (
    <button className="ResetButton" onClick={resetTodos}>
      Reset
    </button>
  );
}

export default ResetButton;
