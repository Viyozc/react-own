import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/home'
const name = {
  a: 1,
  b: 2,
}
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
  state = {
    name: '测试'
  }
  onClickTest = (a) => {
    a = {...this.state}
    alert(JSON.stringify(a))
    this.props.actions.homeClick()
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Home</h1>
          <h1 className='App-title'>{this.props.name}</h1>
        </header>
        <p className='App-intro'>
          <button onClick={this.onClickTest}>测试</button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.home.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
