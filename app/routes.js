import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './layout'
import Home from './pages/home'
import About from './pages/about'
import Info from './pages/info'

export default (
  <Route path="/" component={ Layout }>
    <IndexRoute component={ Home } />
    <Route path="/about" component={ About } />
    <Route path="/info" component={ Info } />
  </Route>
)
