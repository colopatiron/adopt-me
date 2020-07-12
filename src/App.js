const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ])
}

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

ReactDOM.render(React.createElement(App), document.getElementById('root'))
