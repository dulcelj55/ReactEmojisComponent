import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emojis from './Components/Emojis'
import ComplimentButton from './Components/ComplimentButton'

function App() {
  

  return (
    <>
    <h1>Mood Tracker</h1>
    <Emojis/>
    <ComplimentButton/>
     
    </>
  )
}

export default App
