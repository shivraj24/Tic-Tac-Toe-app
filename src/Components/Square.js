import React from 'react';
import "../App.css";
// import { Container } from './styles';

function Square({val, chooseSquare}) {
  return (
  <div className = "square" onClick = {chooseSquare}>
      {val}
  </div>
  );
}

export default Square;