import React, { Component } from 'react';
import Header from '../Header/Header';
import RocketStatus from '../RocketStatus/RocketStatus';
import Sensors from '../Sensors/Sensors';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='dashboard'>
        <Header />
        <RocketStatus />
        <Sensors />
      </div>
    );
  }
}

export default App;
