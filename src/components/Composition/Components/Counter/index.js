import React, { PropTypes } from 'react'
import Ticker from '../../Containers/Ticker'

const Counter = props => {
  return (
    <div>
      <h1>{props.heading || "Simple Counter"}</h1>
      <button>{props.ticker}</button>
    </div>
  )
}

Counter.propTypes = {
  heading: PropTypes.string,
  ticker: PropTypes.number
}

export default Ticker(Counter)
