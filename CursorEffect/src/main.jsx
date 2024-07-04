import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { emojiCursor } from "cursor-effects";

// import {trailingCursor} from "cursor-effects"
// new emojiCursor({ emoji: ["🔥", "🐬", "🦆"] });

// new trailingCursor({particles: 10, rate: 0.5, baseImageSrc: "images.png"})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
    <App />
  </React.StrictMode>,
)
