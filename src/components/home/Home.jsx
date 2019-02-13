import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as SVGLogo } from './logo.svg'
import './Home.scss'

export default class Home extends Component {
  static propTypes = {
    toggleSpinAnimation: PropTypes.func.isRequired,
    shouldSpin: PropTypes.bool.isRequired,
  }

  state = {}

  render() {
    const { shouldSpin, toggleSpinAnimation } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <SVGLogo onClick={toggleSpinAnimation} className={shouldSpin ? 'App-logo Spin' : 'App-logo'} alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}
