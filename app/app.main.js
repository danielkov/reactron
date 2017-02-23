import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './routes'

const root = document.getElementById('root')

render(
  <Router history={ hashHistory } routes={ routes }/>,
  root
)
