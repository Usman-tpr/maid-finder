import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import MaidForm from './Components/MaidForm'
import Signup from './Components/pages/Signup'
import Login from './Components/pages/Login'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/form' element={<MaidForm />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App