import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
  render () {
    return (
      <header>
        <h1>{ this.props.title }</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/info">Info</Link>
        </nav>
      </header>
    )
  }
}
