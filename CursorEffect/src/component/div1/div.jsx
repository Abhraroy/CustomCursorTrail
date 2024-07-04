import React from 'react'
import "./div.css"
function Div() {
function handleclick(){
    console.log('handled');
}

  return (
    <div className='content1' onClick={handleclick}>Divhghguggggggggggggggggggggg</div>
  )
}

export default Div