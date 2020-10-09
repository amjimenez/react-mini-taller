function Mascota(props) {
  const { name, type, breed, characteristics = {} } = props
  const { eyeColor, skinColor } = characteristics
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, type),
    React.createElement('h2', {}, breed),
    React.createElement(
      'h2',
      {},
      eyeColor && skinColor && `Caracteristicas: ${eyeColor} ${skinColor}`
    )
  )
}

const App = () => {
  return React.createElement(
    'div',
    {
      id: 'super-id-element',
    },
    React.createElement('h1', {}, 'Mascotas'),
    React.createElement(Mascota, {
      name: 'Firulais',
      type: 'Perro',
      breed: 'Bulldog',
      characteristics: {
        eyeColor: 'blue',
        skinColor: 'gray',
      },
    }),
    React.createElement(Mascota, {
      name: 'Lolo',
      type: 'Cotorrito',
      breed: 'Cotorrito1',
    }),
    React.createElement(Mascota, {
      name: 'Hulk',
      type: 'Gato',
      breed: 'Angora',
    })
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('my-app'))
