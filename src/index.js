import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nvbr from './Nav/Nvbr'
import Cardgrid from './QCard/Cardgrid'

function App() {
  return (
    <div className='App'>
      <Nvbr />
      <span className='cards'>
        <Cardgrid />
      </span>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
