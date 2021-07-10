import './App.css';
import Timer from './components/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'Work'
    }
  }

  changeTaskType = (type) => {
    console.log("PARENT CLASS: ", type)
    this.setState({
      mode: type
    });
  }

  render() {
    return (
      <div className={this.state.mode}>
        <Timer changeTaskType={this.changeTaskType.bind(this)}/>
      </div>
    )
  }
} 

