import './App.css';
import {useState} from "react";
function App() {

  const [Board,setBoard] = useState(["","","","","","","","",""]);

  return (
    <div className="App">
      <div className = "Board">
        

      </div>
    </div>
  );
}

export default App;
