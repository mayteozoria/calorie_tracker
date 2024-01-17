// import React, { useEffect } from 'react'
import { useState } from 'react'
import axios, { all } from 'axios'
import { API_KEY } from '../src/globals'
import FoodResults from './FoodResults'

const Diary = (props) => {
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
      <form className="center" onSubmit={handleChange}>
        <label htmlFor="simple-search" className="sr-only"></label>
        <div className="relative w-4">
          <div className="sticky inset-y-0.5 start-0 flex items-center ps-3 pointer-events-none">
            <input
              type="text"
              id="simple-search"
              value={searchQuery}
              onChange={onChange}
              className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search food name..."
              required
            />

            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only"></span>
            </button>
          </div>
        </div>
      </form>
      <FoodResults searchResults={searchResults} />
    </div>
  )
}
export default Diary
