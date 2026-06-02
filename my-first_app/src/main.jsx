import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
//   React is the core library.

// It is used for:

// Creating components
// JSX
// State management
// Hooks
// Logic handling

// React only knows how to create UI structure.

// It does NOT know how to display it in browser.

// Purpose

// React DOM connects React with the browser DOM.

// It is responsible for:

// Rendering UI in browser
// Updating webpage
// Managing virtual DOM updates

// Without React DOM, React cannot display anything on screen.
)
