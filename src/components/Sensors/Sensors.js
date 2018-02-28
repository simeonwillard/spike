import React, { Component } from 'react';
import GyroscopicSensor from '../GyroscopicSensor/GyroscopicSensor';
import IonDriveSensor from '../IonDriveSensor/IonDriveSensor';
import FlameSensor from '../FlameSensor/FlameSensor';
import './Sensors.css';

class Sensors extends Component {
    render() {
        return (
            <div className='container'>
                <h2>Sensors</h2>
                <div className='sensor-container'>
                    <GyroscopicSensor />
                    <IonDriveSensor />
                    <FlameSensor />
                </div>
            </div>
        );
    }
}

export default Sensors;
