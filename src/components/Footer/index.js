import React, { PropTypes } from 'react'

const Footer = ({phone}) => {
  return (
    <footer>
      <p>{`Call us at: ${phone}`}</p>
    </footer>
  )
}

Footer.propTypes = {
  phone: PropTypes.string
}

export default Footer
