import './App.css';
import Timer from './components/Timer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

export default class App extends Component {
  changeTaskType = (type) => {
    console.log(type)
  }

  render() {
    return (
      <div className="App">
        <Timer changeTaskType={this.changeTaskType.bind(this)}/>
      </div>
    )
  }
} 

