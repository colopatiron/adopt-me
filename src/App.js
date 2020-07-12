import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return React.createElement('div', { id: 'an-id' }, [
    React.createElement('h1', {}, 'Adopt me!'),
    React.createElement(Pet, {
      name: 'Python',
      animal: 'cat',
      breed: 'Perfect kitteh',
    }),
    React.createElement(Pet, {
      name: 'Hya',
      animal: 'dog',
      breed: 'Good girl',
    }),
    React.createElement(Pet, {
      name: 'Birdie',
      animal: 'bird',
      breed: 'Awesome',
    }),
  ])
}

render(React.createElement(App), document.getElementById('root'))
