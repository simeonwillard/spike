import React, { Component } from 'react';
import { BarLoader } from 'react-spinners';

class RocketStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className='container'>
                <h2>Rocket Status</h2>
                <div className='sweet-loading'>
                    <BarLoader
                        color={'#123abc'}
                        loading={this.state.loading}
                        width='1000'
                    />
                </div>
            </div>
        )
    }
}

export default RocketStatus;
