import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Counter from './components/Composition/Components/Counter'
import Countdown from './components/Composition/Components/Countdown'

const links =
  [ 'About Us'
  , 'Team'
  , 'FAQ'
  , 'Sign In'
  ]

const team =
  [
    { name: 'joe'
    , title: 'manager'
    , quote: 'go hard or go home'
    }
  , { name: 'joanna'
    , title: 'director'
    , quote: 'all the world\'s a stage'
    }
  , { name: 'jimmy'
    , title: 'sales'
    , quote: 'i believe i can fly'
    }
  ]

const App = () => {
  return (
    <div>
      <Header
        header={'WP Functional React'}
        links={links}
      />
      <Main
        title={'Meet the Team'}
        teamMembers={team}
      />
      <Footer phone={'+1 888 555-2011'} />

      <h1>Composition Example:</h1>

      <div style={{fontSize: '1.5rem', background: '#ccc', display: 'block', padding: '1rem'}}>
        <p>
          <code>
            {`The following components are both composed from the same \`Ticker\` Container. This container
            receives a visual component, and returns a new component that ticks every second.
            This pattern is used for composition, isolating stateful logic in one place, one container.`}
          </code>
        </p>
        <p><i>E.g.</i></p>
        <p>
          <code>{`const Component = props => <div>{props.ticker}</div>`}</code>
        </p>
        <p>
          <code>export default Ticker(Component)</code>
        </p>
      </div>

      <Counter />
      <Countdown />

    </div>
  )
}

export default App
