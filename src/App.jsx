import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpinningWheel from './component/SpinningWheel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SpinningWheel/>
  
    </>
  )
}

export default App
