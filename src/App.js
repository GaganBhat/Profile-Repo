import React from 'react'
import './App.css'
import { Route, Router, Switch } from 'react-router'
import Home from './components/home/Home'
import {createBrowserHistory} from 'history'
import Projects from './components/projects/Projects'

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
            {Projects}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
