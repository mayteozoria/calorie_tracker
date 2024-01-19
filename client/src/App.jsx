import './index.css'
import { useState } from 'react'

import Foodlog from '../pages/FoodLog'
import Navbar from '../components/Navbar'
function App(props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Foodlog />
      </main>
    </>
  )
}

export default App
