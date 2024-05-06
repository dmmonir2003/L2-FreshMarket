"use client"

import React, { useState } from 'react';
import Countdown from 'react-countdown';

const CountDowon = () => {
    const [time, setTime] = useState(0);

    const handleTick = ({ total }) => {
        setTime(total);
    };

    return (
        <div>
            <Countdown
                date={Date.now() + 1000}
                intervalDelay={3}
                precision={3}
                onTick={handleTick}
            />
            {time}
        </div>
    );
};

export default CountDowon;
