import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';

class GyroscopicSensor extends Component {
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
                        color={'#123abc'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}

export default GyroscopicSensor;