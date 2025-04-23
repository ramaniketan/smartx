
import { Route, Router, Routes } from 'react-router-dom'
import Home from './home'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/_index.scss'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
