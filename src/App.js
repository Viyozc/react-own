import React, { Component } from 'react'
import logo from './resource/logo.svg'

import './App.css'

class App extends Component {
  state = {
    name: '测试'
  }
  onClickTest = (a) => {
    a = {...this.state}
    console.log(this)
    this.props.history.push({
      pathname: '/home',
      search: '?name=name'
    })
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React APP</h1>
        </header>
        <h1 onClick={this.onClickTest}>Home</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App
