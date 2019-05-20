import React, { Component } from 'react'
import logo from 'assets/image/logo.svg'
// css作用域配合react使用插件
import CSSModules from 'react-css-modules'
import styles from './index.scss'
function AppComponent (props) {
  return (
    <button onClick={props.open}>{props.name}</button>
  )
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'good'
    }
    // this.openDialog = this.openDialog.bind(this)
  }
  openDialog = () => {
    alert(this.state.name)
  }
  render () {
    return (
      <div className="center">
        good
        <header styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h1 styleName="App-title">Welcome to my React</h1>
        </header>
        <AppComponent name={this.state.name} open={this.openDialog}/>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default CSSModules(App, styles)
