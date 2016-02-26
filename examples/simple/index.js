import 'babel-polyfill'
const React = require('react')
const render = require('react-dom').render
const App = require('./components/App') // eslint-disable-line no-unused-vars

render(<App />, document.getElementById('root'))
