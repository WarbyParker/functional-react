import React from 'react'

import styles from './styles.css'

const Typography = () => {
  return (
    <div>
      <h1 className={styles.primaryHeading}>Typography</h1>
      <hr/>
      <h1 className={styles.primaryHeading}>Primary Heading</h1>
      <h2 className={styles.secondaryHeading}>Secondary Heading</h2>
      <h3 className={styles.tertiaryHeading}>Tertiary Heading</h3>
      <div className={styles.label}>caption label</div>
      <div className={styles.copyContainer}>
        <p className={styles.copy}>
          Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>
      </div>
    </div>
  )
}

export default Typography
