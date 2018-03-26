import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';

class GyroscopicSensor extends Component { // I said a hip hop Hippie to the hippie The hip, hip a hop, and you don't stop,
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div>
                <h3>Gyroscopic Sensor</h3>
                <div className='sweet-loading'>
                    <RingLoader
                        color={'#00FFFF'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}

export default GyroscopicSensor;