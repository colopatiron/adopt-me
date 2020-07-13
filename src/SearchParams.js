import React, { useState } from 'react'

const SearchParams = () => {
  const [location, setLocation] = useState('New York, NY')

  return (
    <div className='search-params'>
      <h1>Location: {location}</h1>
      <form>
        <label htmlFor='location'>
          Location
          <input
            id='location'
            value={location}
            placeholder='Location'
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
