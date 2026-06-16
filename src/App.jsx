import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
