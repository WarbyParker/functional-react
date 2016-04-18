import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from './styles.css'

// setTimeout(() => {
//   System.import('./components/Buttons').then(module => {
//     module.default
//   }).catch(err => {
//     console.log('Chunk loading failed')
//   })
// }, 5500)

class App extends React.Component {
  render () {
    return (
      <div>
        <header className={styles.header}>
          <a href='/'>
            <h1 className={styles.mastHead}>
              <img src='https://www.warbyparker.com/assets/img/logos/warby_parker.svg' className={styles.logo}/>
              <span className={styles.tagline}>styleguide</span>
            </h1>
          </a>
          <nav className={styles.nav}>
            <ul className={styles.mainNav}>
              <li className={styles.link}><Link to='/typography'>Typography</Link></li>
              <li className={styles.link}><Link to='/buttons'>Buttons</Link></li>
            </ul>
          </nav>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object
}

export default App
