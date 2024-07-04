import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MouseTrail strokeColor={"#FF8541"} lineDuration={10} lag={0} lineWidthStart={20}/>
    <App />
  </React.StrictMode>,
)
