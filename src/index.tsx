import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css'
import App from './app'
import * as serviceWorker from './serviceWorker'

import Collections from './views/collections/collections'
import Search from './views/search/search'

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Collections} />
        <Route exact path="/search" component={Search} />
        {/* <Route path="/random" component={Random} /> */}
      </Switch>
    </App>
  </BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
