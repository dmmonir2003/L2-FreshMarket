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

import { Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
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

        <Stack direction='row' justifyContent={'space-evenly'} gap={1} width={{ xs: '20rem', sm: '80vh' }} bgcolor={red[400]} height={100} alignItems='center' borderColor={red} p={1} borderRadius={2} >
            <Typography color={"white"} fontSize={18} fontWeight={700}>End Time: </Typography>
            <Typography color={"white"} border={1} p={.5} borderColor={'white'} borderRadius={5} fontWeight={700}>{timeLeft.days}D</Typography>
            <Typography color={"white"} border={1} p={.5} borderColor={'white'} borderRadius={5} fontWeight={700}>{timeLeft.hours}H</Typography>
            <Typography color={"white"} border={1} p={.5} borderColor={'white'} borderRadius={5} fontWeight={700}>{timeLeft.minutes}M</Typography>
            <Typography color={"white"} border={1} p={.5} borderColor={'white'} borderRadius={5} fontWeight={700}>{timeLeft.seconds}S</Typography>
        </Stack>

    );
};

export default CountdownTimer;