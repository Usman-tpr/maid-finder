import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import MaidForm from './Components/MaidForm'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/form' element={<MaidForm />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App