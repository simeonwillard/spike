import React from 'react';
import { RingLoader } from 'react-spinners';

function GyrohopicSensor() { // I said a hip hop Hippie to the hippie The hip, hip a hop, and you don't stop,
    return (
        <div>
            <h3>Gyroscopic Sensor</h3>
            <div className='sweet-loading'>
                <RingLoader color={'#00FFFF'} loading={true} />
            </div>
        </div>
    )
}

export default GyroscopicSensor;