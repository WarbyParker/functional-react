import React, { PropTypes } from 'react'
import Ticker from '../../Containers/Ticker'

const Countdown = props => {
  return (
    <div>
      <h1>{props.heading || "Simple Countdown"}</h1>
      <button>{Math.max((25 - props.ticker), 0)}</button>
    </div>
  )
}

Countdown.propTypes = {
  heading: PropTypes.string,
  ticker: PropTypes.number
}

export default Ticker(Countdown)
