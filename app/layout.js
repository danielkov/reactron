import React, { Component } from 'react'
import Header from './components/header'

export default class Layout extends Component {
  render () {
    return (
      <div>
        <Header title="Reactron" />
        <main>
          { this.props.children }
        </main>
      </div>
    )
  }
}
