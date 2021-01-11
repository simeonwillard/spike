import React from 'react';
import { DotLoader } from 'react-spinners';
// capitalized "i" in the file name [4]

function IonDriveSensor () {
    return (
        <div>
            <h3>Ion Drive Sensor</h3>
            <div className='sweet-loading'>
                <DotLoader color={'#FFFF00'} loading={true} />
            </div>
        </div>
    )
}

export default IonDriveSensor;