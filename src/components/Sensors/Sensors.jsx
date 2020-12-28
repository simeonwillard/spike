import React from 'react';
import GyroscopicSensor from '../GyroscopicSensor/GyroscopicSensor.jsx';
import IonDriveSensor from '../IonDriveSensor/IonDriveSensor.jsx';
import FlameSensor from '../GyroscopicSensor/GyroscopicSensor.jsx'; // Your flames don't look very... flamey

// This used to look so pretty! What's the problem? Did you lose your sense of style?


function Sensors() {
    return (
        <div className='container'>
            <h2>Sensors</h2>
            <div className='sensor-container'>
                <GyroscopicSensor />
                {/* Oooops! Did someone steal your ion drive? Ion so sorry! */}
                <FlameSensor />
            </div>
        </div>
    );
}

export default Sensors;
