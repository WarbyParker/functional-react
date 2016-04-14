import React, { PropTypes } from 'react'
import Ticker from '../../Containers/Ticker'

import styles from './styles.css'

const Countdown = props => {
  return (
    <div>
      <h1>{props.heading || "Simple Countdown"}</h1>
      <button className={styles.button}>
        {Math.max((25 - props.ticker), 0)}
      </button>
    </div>
  )
}

Countdown.propTypes = {
  heading: PropTypes.string,
  ticker: PropTypes.number
}

// Ticker automatically provides an inner component
// with a this.state.ticker value that updates every second
export default Ticker(Countdown)
