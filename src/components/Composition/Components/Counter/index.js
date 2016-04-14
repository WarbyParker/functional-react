import React, { PropTypes } from 'react'
import Ticker from '../../Containers/Ticker'

import styles from './styles.css'

const Counter = props => {
  return (
    <div>
      <h1>{props.heading || "Simple Counter"}</h1>
      <button className={styles.button}>
        {props.ticker}
      </button>
    </div>
  )
}

Counter.propTypes = {
  heading: PropTypes.string,
  ticker: PropTypes.number
}

// Ticker automatically provides an inner component
// with a this.state.ticker value that updates every second
export default Ticker(Counter)
