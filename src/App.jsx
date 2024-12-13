
import './App.css'
import SpinningWheel from './component/SpinningWheel'
import Quiz from './component/Quiz'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SpinningWheel />}>

          </Route>
          <Route exact path="/quiz" element={<Quiz />}>

          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
