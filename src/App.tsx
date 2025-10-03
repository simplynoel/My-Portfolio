import { useState } from 'react'
import './App.css'
//For Navigation
//For Screens
import Home from './components/Screens/Home'

import Header from './components/Header'
//For Icons


function App() {

  const [currentPage, setCurrentPage] = useState<String>('profile');

  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  )
}

export default App
