import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Typography from './components/Typography'
import Buttons from './components/Buttons'
import App from './app'

ReactDOM.render(
  (
    <Router history={hashHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={Typography} />
        <Route path='typography' component={Typography} />
        <Route path='buttons' component={Buttons} />
      </Route>
    </Router>
  ), document.getElementById('main')
)
