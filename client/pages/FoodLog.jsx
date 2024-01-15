import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../src/globals'

const Diary = () => {
  // const [allFoods, setAllFoods] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getFoods = async () => {
    const response = await axios.get(
      `https://api.calorieninjas.com/v1/nutrition?query=` + searchQuery,
      { headers: { 'X-Api-Key': `${API_KEY}` } }
    )

    setSearchResults(response.data.items)
    console.log(response.data.items)
  }
  const handleChange = (e) => {
    e.preventDefault()
    console.log(searchQuery)
    getFoods()
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value)
  }
  return (
    <div>
      Search in FoodDatabase
      <form onSubmit={handleChange}>
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search Foods"
          onChange={onChange}
        ></input>
        <button>search</button>
      </form>
    </div>
  )
}

export default Diary
