import React from 'react'

import styles from './styles.css'

const Typography = () => {
  return (
    <div>
      <h1>Typography</h1>
      <hr/>
      <h1 className={styles.primaryHeading}>H1 Heading</h1>
      <h2 className={styles.secondaryHeading}>H2 Heading</h2>
      <h3>H3 Heading</h3>
      <h4>H4 Heading</h4>
    </div>
  )
}

export default Typography
