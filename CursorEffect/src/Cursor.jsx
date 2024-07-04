import React, { useEffect } from 'react'
import './Cursor.css'
import { rainbowCursor } from "cursor-effects";

function Cursor() {
    useEffect(() => {
        const target = document.querySelector('.hello')
    new rainbowCursor({
      length: 13,
      colors: ["red"],
      size: 10,
      element:target
    
    });
      return () => {
      }
    }, [])
    
    useEffect(() => {
      const hello = document.querySelector('.hello')
       window.addEventListener('mousemove',(e)=>{
      hello.style.left = `${e.clientX - hello.clientWidth / 2}px`;
      hello.style.top = `${e.clientY - hello.clientHeight / 2}px`;
      let a =Math.random();
      hello.style.width='${a}px';
    })
      return () => {
      }
    }, [])
    
   

 
  // Moveimg.forEach((item) => {
  //   
  //   const x = (e.clientX - Axis.left) / Axis.width;
  //   const y = (e.clientY - Axis.top) / Axis.height;
  //   const Movex = (x - 0.2) * 20;
  //   const Movey = (y - 0.2) * 20;
  //   item.style.transform = `translate(${Movex}px,${Movey}px)`;
  // });
  return (
    <>
    <div className="hello"></div>
    <div className='cursor'>Cursor</div>
  </>)
}

export default Cursor