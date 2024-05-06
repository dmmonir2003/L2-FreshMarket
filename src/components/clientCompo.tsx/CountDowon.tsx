// "use client"

// import React, { useState } from 'react';
// import Countdown from 'react-countdown';

// const CountDowon = () => {
//     const [time, setTime] = useState(Date.now() + 1000);

//     const handleTick = ({ total }) => {
//         setTime(total);
//     };

//     return (
//         <div>
//             <Countdown
//                 date={time}
//                 intervalDelay={3}
//                 precision={3}
//                 onTick={handleTick}
//             />
//             {time}
//         </div>
//     );
// };

// export default CountDowon;

"use client";

import { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 15);

    const calculateTimeLeft = () => {
        const difference = +endDate - +new Date();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="text-2xl font-bold flex justify-center items-center gap-4">
            <h2>End Time: </h2>
            <p className="p-2 bg-red-300 rounded">{timeLeft.days}D</p>
            <p className="p-2 bg-red-300 rounded">{timeLeft.hours}H</p>
            <p className="p-2 bg-red-300 rounded">{timeLeft.minutes}M</p>
            <p className="p-2 bg-red-300 rounded">{timeLeft.seconds}S</p>
        </div>
    );
};

export default CountdownTimer;