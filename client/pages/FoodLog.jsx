import React from 'react'
import { useState } from 'react'
import axios, { all } from 'axios'
import { API_KEY } from '../src/globals'
// import FoodResults from '../components/FoodResults'

const FoodLog = () => {
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
      <div className="max-w-2xl mx-auto ">
        <div className=" bg-slate-200 relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-blue-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <form onSubmit={handleChange}>
                <input
                  type="text"
                  id="table-search"
                  value={searchQuery}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                  required
                />
              </form>
            </div>
          </div>
          <table className=" w-full text-sm text-left dark:text-blue-400">
            <thead className="text-xs text-white uppercase bg-gray-500 dark:bg-green-700 dark:text-red-800">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Food
                </th>
                <th scope="col" className="px-6 py-3">
                  Calories
                </th>
                <th scope="col" className="px-6 py-3">
                  Protein
                </th>
                <th scope="col" className="px-6 py-3">
                  Carbs
                </th>
                <th scope="col" className="px-6 py-3">
                  Fats
                </th>
              </tr>
            </thead>
            <tbody>
              {searchResults.map((item) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-white-50 dark:hover:bg-gray-600"
                  key={item.name}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap"
                  >
                    {item.name}
                  </th>
                  <td className="px-6 py-4">{item.calories}</td>
                  <td className="px-6 py-4">{item.protein_g}g</td>
                  <td className="px-6 py-4">{item.carbohydrates_total_g}g</td>
                  <td className="px-6 py-4">{item.fat_total_g}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default FoodLog
