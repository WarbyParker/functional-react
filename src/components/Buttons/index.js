import React from 'react'

import typogrphyStyles from '../Typography/styles.css'
import styles from './styles.css'

const Buttons = () => {
  return (
    <div>
      <h1 className={typogrphyStyles.primaryHeading}>Buttons</h1>
      <hr/>
      <button className={styles.primaryButton}>Primary Button</button>
    </div>
  )
}

export default Buttons
