import React, { Component } from 'react'
import logo from './resource/logo.svg'
import './App.css'
const name = {
  a: 1,
  b: 2,
}
class App extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
      
  //   }
  // }
  // state = {
  //   name: '测试'
  // }
  onClickTest = (a) => {
    a = {...this.state}
    alert(JSON.stringify(a))
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <button onClick={this.onClickTest}>测试</button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
