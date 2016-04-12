import React from 'react'
import Ticker from '../Containers/Ticker'

// We're using object destructuring as well as default arg value
// This could be rewritten as:
// const Counter = (props) => ... <h1>{props.heading} ...
const Counter = ({ heading = 'Counter' }) => {
  render () {
    return (
      <div>
        <h1>{heading}</h1>
        <button>{this.state.ticker}</button>
      </div>
    )
  }
}

// Ticker automatically provides an inner component
// with a this.state.ticker value that updates every second
export default Ticker(Counter)
