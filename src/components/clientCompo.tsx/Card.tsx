// import React from 'react';
// import Image from 'next/image';
// const Card = ({ item, index }) => {
//     return (
//         <div className={`${index === 0 || index === 2 ? 'row-span-2 h-[300px] bg-gray-400 rounded-xl border border-purple-900' : 'rounded-xl border bg-red-400  border-purple-900'}`}>
//             <Image src={item.url} alt='image' width={50} height={30}></Image>
//             {item.title}
//         </div>
//     );
// };

// export default Card;


// import React from 'react';

// const Card = ({ children, index }) => {


//     return (
//         <div className={`${index === 0 || index === 2 ? "h-[300px] bg-red-300" : "h-[150px] bg-green-300"} `}>

//             <div>

//                 {children}



//             </div>
//         </div>
//     );
// };

// export default Card;



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';


const Card = ({ item, customHeight }) => {







    // No need for itemClassMap or inline styles

    return (
        <Box


            sx={{
                height: {
                    xs: 200,
                    md: customHeight
                },
                backgroundImage: `url(${item.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }} className={` bg-cover  bg-center rounded-lg shadow-md overflow-hidden  flex flex-col justify-center items-center `}>
            <Link href={item?.pathName}>{item.title}</Link>
        </Box>
    );
};

export default Card;
