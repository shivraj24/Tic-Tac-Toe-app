import './App.css';
import Square from "./Components/Square";
import {useState} from "react";
function App() {

  const [Board,setBoard] = useState(["","","","","","","","",""]);
  const [Player,setPlayer] = useState("X");
  const chooseSquare = (square) =>{
      setBoard(
        Board.map((val,idx) => {
          if(idx === square && val == "")
          {
              return Player;
          }
          return val;
      })
      );
      
      if(Player === "X")
      {
        setPlayer("O");
      }
      else{
        setPlayer("X");
      }
  };

  return (
    <div className="App">
      <div className = "Board">
        <div className="row">
          <Square val = {Board[0]} chooseSquare = {()=>{chooseSquare(0)}}></Square>
          <Square val = {Board[1]} chooseSquare = {()=>{chooseSquare(1)}}></Square>
          <Square val = {Board[2]} chooseSquare = {()=>{chooseSquare(2)}}></Square>

        </div>
        <div className="row">
        <Square val = {Board[3]} chooseSquare = {()=>{chooseSquare(3)}}></Square>
          <Square val = {Board[4]} chooseSquare = {()=>{chooseSquare(4)}}></Square>
          <Square val = {Board[5]} chooseSquare = {()=>{chooseSquare(5)}}></Square>
        </div>
        <div className="row">
        <Square val = {Board[6]} chooseSquare = {()=>{chooseSquare(6)}}></Square>
          <Square val = {Board[7]} chooseSquare = {()=>{chooseSquare(7)}}></Square>
          <Square val = {Board[8]} chooseSquare = {()=>{chooseSquare(8)}}></Square>
        </div>
       
       
      </div>
    </div>
  );
}

export default App;
