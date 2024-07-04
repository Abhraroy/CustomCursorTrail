import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Div from './component/div1/div'
import Div2 from './component/div2/div2'
import Div3 from './component/div3/div3'
import Cursor from './Cursor.jsx';
  
function App() {

  return (
    <>
    <Cursor/>
      <Div/>
      <Div2/>
      <Div3/>
    </>
  )
}

export default App
