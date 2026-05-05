import React from 'react'

function History({ giatrio, setNuocdi, setTieptheo }) {
  return (
    <div className='history'>
      {giatrio.map((step, move) => (
        <button
          key={move}
          onClick={() => {
            setNuocdi(move);
            setTieptheo(move % 2 === 0);
          }}
        >
          Di toi buoc #{move}
        </button>
      ))}
    </div>
  )
}

export default History
