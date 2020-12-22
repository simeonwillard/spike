import React from 'react';
import Header from '../Header/Header';
import RocketStatus from '../RocketStatus/RocketStatus';
import Sensors from '../Sensors/Sensors';
import './App.css';

function App () {
    return (
        <div className='dashboard'>
            <Header />
            <RocketStatus />
            <Sensors />
        </div>
    );
}

export default App;
