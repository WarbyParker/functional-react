import React, { PropTypes } from 'react'
import styles from './styles.css'

const Footer = ({phone}) => {
  return (
    <footer className={styles.block}>
      <p>
        {`Call us at: ${phone}`}
      </p>
    </footer>
  )
}

Footer.propTypes = {
  phone: PropTypes.string
}

export default Footer
