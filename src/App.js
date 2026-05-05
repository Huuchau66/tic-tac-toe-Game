import React, { useState } from 'react'
import "./App.css"
import Board from "./component/Board";
import History from "./component/History";

function App() {
  const [giatrio,setGiatrio]=useState([Array(9).fill(null)])
  const [nuocdi,setNuocdi] = useState(0)
  const [tieptheo,setTieptheo]=useState(true)
  const [thongbao,setThongbao]=useState("Luot dau tien: X")
  const nuocdihientai = giatrio[nuocdi] || Array(9).fill(null);

  const clickXO = (i) =>{
    const giatrimoi =  nuocdihientai.slice();
    if (giatrimoi[i] || nguoithang(nuocdihientai)) return;
    giatrimoi[i] = tieptheo ? ("X") : ("O")
   const newHistory = giatrio.slice(0, nuocdi + 1);
    setGiatrio([...newHistory, giatrimoi]);
    setNuocdi(newHistory.length)
    setTieptheo(!tieptheo)
    const winner = nguoithang(giatrimoi);
    if (winner) {
    setThongbao("Nguoi chien thang: " + winner);
  } else if (giatrimoi.every(cell=>cell!==null)){
    setThongbao("Ket qua: Hoa")
  } 
  else setThongbao("Luot tiep theo:"+ (tieptheo % 2 ===0 ? "X" : "O"))
}

  const nguoithang = (board) =>{
    const nhungduongthang = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    ]
    for (let i=0; i<nhungduongthang.length; i++){
      const [a,b,c] = nhungduongthang[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c])
        {return board[a]}
    }
      return null
  }

  const resetGame = () => {
     setGiatrio([Array(9).fill(null)]);
    setNuocdi(0);
    setThongbao("Luot dau tien: X");
    setTieptheo(true);
  }
const quaylai = () => {
  if (nuocdi === 0) return;

  const newStep = nuocdi - 1;

  setNuocdi(newStep);
  setTieptheo(newStep % 2 === 0);
  setThongbao("Luot tiep theo:"+ (tieptheo % 2 ===0 ? "X" : "O"))
  
};

  return (
    <div className='container'>
    <div className='box'>
    <div className='gamebox'>
    <h1>{thongbao}</h1>
    <Board nuocdihientai={nuocdihientai} clickXO={clickXO}/>
    <div className='bnt'>
    <button className='reset' onClick={resetGame}>Reset Game</button>
    <button className='undo' onClick={quaylai}>Undo</button>
    </div>
    </div>
   <History giatrio={giatrio} setNuocdi={setNuocdi} setTieptheo={setTieptheo} tieptheo={tieptheo} setThongbao={setThongbao}/>
    </div>
    </div>
  )
}

export default App
