import React from 'react'

function History({ giatrio, setNuocdi, setTieptheo, tieptheo,setThongbao}) {
  return (
    <div className='history'>
      {giatrio.map((step, move) => (
        <button
          key={move}
          onClick={() => {
            setNuocdi(move);
            setTieptheo(move % 2 === 0);
            setThongbao("Luot tiep theo:"+ (move % 2 === 0 ? "X" : "O"))
          }}
        >
          Di toi buoc #{move}
        </button>
      ))}
    </div>
  )
}

export default History
