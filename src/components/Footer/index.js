import React from 'react'
import styles from './styles.css'

export default ({phone}) => {
  return (
    <footer className={styles.block}>
      <p>
        {`Call us at: ${phone}`}
      </p>
    </footer>
  )
}
