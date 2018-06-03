import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'
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
    this.props.actions.homeClick(this.props.number || 0)
  }
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Home</h1>
          <h1 className='App-title'>点击{this.props.number}</h1>
        </header>
        <h1 onClick={this.onClickTest}>点击</h1>
        {this.props.children}
      </div>
    )
  }
}

App.defaultProps = {
  number: 1
}

const mapStateToProps = state => {
  return {
    number: state.home.number || 1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...actions}, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
