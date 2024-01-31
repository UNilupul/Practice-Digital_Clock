import React, { useEffect, useState } from 'react'

import './digital_clock.css';

function DigitalClock() {
    return (
        <div className='clock-container'>
            <div className='clock'>
                <span>00:00:00</span>
            </div>
        </div>
    )
}

export default DigitalClock;