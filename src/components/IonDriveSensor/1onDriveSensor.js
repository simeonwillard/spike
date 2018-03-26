import React, { Component } from 'react';
import { DotLoader } from 'react-spinners';

class IonDriveSensor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div>
                <h3>Ion Drive Sensor</h3>
                <div className='sweet-loading'>
                    <DotLoader
                        color={'#FFFF00'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}

export default IonDriveSensor;