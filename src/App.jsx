import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'


import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routea>
        <Route path="" element= {<Navbar></Navbar>} />
      </Routea>
    </BrowserRouter>
    </>
  )
}

export default App
