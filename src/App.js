import React from 'react'
import './App.css'
import { Route, Router, Switch } from 'react-router'
import Home from './components/home/Home'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

function App () {

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          <Route exact path="/projects">
            Testing
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
