import Navbar from './components/Navbar'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import './App.css'

/* import delle pagine di riferimento */
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element= {<Home/>} />
        <Route path="/ChiSiamo" element= {<ChiSiamo/>} />
        <Route path="/Products" element= {<Products/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
