import React from 'react'

export default function Filter() {
  return (
    <div><label>Filter by Rating: </label>
    <select> 
    <option value="high">Highest First</option>
    <option value="low">Lowest First</option>
     </select>   
      </div>  
  )
}
