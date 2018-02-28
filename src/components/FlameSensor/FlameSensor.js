import React, { Component } from 'react';
import { CircleLoader } from 'react-spinners';

class FlameSensor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div>
                <h3>Flame Sensor</h3>
                <div className='sweet-loading'>
                    <CircleLoader
                        color={'#e25822'}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        )
    }
}

export default FlameSensor;