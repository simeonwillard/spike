import React from 'react';
import { CircleLoader } from 'react-spinners';

function FlameSensor() {
    return (
        <div>
            <h3>Flame Sensor</h3>
            <div className='sweet-loading'>
                <CircleLoader color={'#e25822'} loading={true} />
            </div>
        </div>
    )
}

export default FlameSensor;