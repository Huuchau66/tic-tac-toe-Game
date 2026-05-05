import React from 'react'

function Board({ nuocdihientai, clickXO }) {
  return (
    <>
      <div className='row'>
        <button onClick={()=>clickXO(0)} className='ovuong'>{nuocdihientai[0]}</button>
        <button onClick={()=>clickXO(1)} className='ovuong'>{nuocdihientai[1]}</button>
        <button onClick={()=>clickXO(2)} className='ovuong'>{nuocdihientai[2]}</button>
      </div>
      <div className='row'>
        <button onClick={()=>clickXO(3)} className='ovuong'>{nuocdihientai[3]}</button>
        <button onClick={()=>clickXO(4)} className='ovuong'>{nuocdihientai[4]}</button>
        <button onClick={()=>clickXO(5)} className='ovuong'>{nuocdihientai[5]}</button>
      </div>
      <div className='row'>
        <button onClick={()=>clickXO(6)} className='ovuong'>{nuocdihientai[6]}</button>
        <button onClick={()=>clickXO(7)} className='ovuong'>{nuocdihientai[7]}</button>
        <button onClick={()=>clickXO(8)} className='ovuong'>{nuocdihientai[8]}</button>
      </div>
    </>
  )
}

export default Board
