import './App.css'
import { useState } from 'react'
import FoodLog from '../components/FoodLog'
// import FoodResults from '../components/FoodResults'

function App(props) {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div>
      <FoodLog />
    </div>
  )
}

export default App
