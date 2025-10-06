import './App.css'

import { BrowserRouter, Routes , Route } from 'react-router-dom'

/* Import componenti */
import Navbar from './components/Navbar'
/* Layout */
import DefaultLayout from './DefaultLayout'

/* import delle pagine di riferimento */
import Home from './pages/Home'
import ChiSiamo from './pages/ChiSiamo'
import Products from './pages/Products'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout/>}>        
          <Route path="/" element={<Home/>} />
          <Route path="/ChiSiamo" element={<ChiSiamo/>} />
          <Route path="/Products" element={<Products/>} />        
        </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
