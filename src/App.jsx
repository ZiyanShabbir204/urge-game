
import './App.css'
import SpinningWheel from './component/SpinningWheel'
import Quiz from './component/Quiz'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<SpinningWheel />}>

          </Route>
          <Route exact path="/quiz" element={<Quiz />}>

          </Route>
        </Routes>

      </HashRouter>

    </>
  )
}

export default App
