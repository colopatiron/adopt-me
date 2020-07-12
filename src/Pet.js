import React from 'react'
// Named component for easier debugging
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Animal: {animal}</h2>
      <h2>Breed: {breed}</h2>
    </div>
  )
}
