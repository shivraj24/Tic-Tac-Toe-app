import './App.css';
import Square from "./Components/Square";
import {useState,useEffect} from "react";
import Patterns from "./Patterns";
function App() {

  const [Board,setBoard] = useState(["","","","","","","","",""]);
  const [Player,setPlayer] = useState("X");
  const [result,setResult] = useState({winner:"none",state:"none"});


  useEffect(()=>{
      checkWin(); 
      checkIfTie();
      if(Player === "X")
      {
        setPlayer("O");
      }
      else{
        setPlayer("X");
      }
  },[Board]);

  useEffect(()=>{
    if(result.state != "none")
    {
      alert(`Game Finished ${result.winner} Won`);
      //window.location.reload();
      restartGame();

    }
  },[result]);


  const restartGame  = () =>{
      setBoard(["","","","","","","","",""]);
      setPlayer("O");
      setResult({winner : "none" , state : "none"});
  }

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
      
     
  };


  const checkWin = () =>{
      Patterns.forEach((currPattern) => {
        const first = Board[currPattern[0]];
        if(first === "")
        {
          return ;
        }
        let found = true;
        currPattern.forEach((idx) =>{
          if(Board[idx] != first)
          {
            found = false;
          }
        });
        
        if(found)
        {
          setResult({
            winner: Player,
            state :"won"
          });
        }
      });
  };


  const checkIfTie = () =>{

    let filled = true;

    Board.forEach((squareidx) =>{
        if(squareidx === "")
        {
          filled = false;
        }
    });

    if(filled)
    {
      setResult({
        winner : "No One",
        state : "Tie"
      });
    }


  }

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
