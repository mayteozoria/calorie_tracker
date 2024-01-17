import * as React from 'react'

const FoodResults = (props) => {
  return (
    <div>
      {props.searchResults.map((item) => (
        <div className="text-black" key={item._id}>
          <h3 className="text-black">{item.calories}</h3>
          <h3 className="text-black">{item.protein_g}g</h3>
          <h3 className="text-black">{item.carbohydrates_total_g}g</h3>
          <h3 className="text-black">{item.fat_total_g}g</h3>
        </div>
      ))}
    </div>
  )
}

export default FoodResults
