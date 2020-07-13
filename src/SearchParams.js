import React, { useState, useEffect } from 'react'
import pet, { ANIMALS } from '@frontendmasters/pet'
import useDropDown from './useDropdown'

const SearchParams = () => {
  const [location, setLocation] = useState('New York, NY')
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropDown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown] = useDropDown('Breed', '', breeds)

  useEffect(() => {
    setBreeds([])
    setBreed('')

    pet.breeds(animal).then(({ breeds }) => {
      // this will work too
      // const breedStrings = breeds.map((breed) => breed,name)
      const breedStrings = breeds.map(({ name }) => name)
      setBreeds(breedStrings)
    }, console.error)
  })

  return (
    <div className='search-params'>
      <h1>Location: {location}</h1>
      <h1>Animal: {animal}</h1>
      <h1>Breed: {breed}</h1>
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
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
