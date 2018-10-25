import React, { Component } from 'react';
import { DotLoader } from 'react-spinners';

class IonDriveSensor extends Component {
    render() {
        return (
            <div>
                <h3>Ion Drive Sensor</h3>
                <div className='sweet-loading'>
                    <DotLoader
                        color={'#FFFF00'}
                        loading={true}
                    />
                </div>
            </div>
        )
    }
}

export default IonDriveSensor;