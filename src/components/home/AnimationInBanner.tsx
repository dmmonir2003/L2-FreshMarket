"use client"
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';



// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Image from 'next/image';

// const AnimationInBanner = () => {
//     return (
//         <div>


//             <Swiper
//                 spaceBetween={50}
//                 slidesPerView={3}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 <SwiperSlide ><Image width={50} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-9.jpg" /> </SwiperSlide>
//                 <SwiperSlide> <Image width={250} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide>
//                 <SwiperSlide>  <Image width={250} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide>
//                 <SwiperSlide><Image width={250} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>

//             </Swiper>
//         </div>
//     );
// };

// export default AnimationInBanner;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

const AnimationInBanner = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    return (
        <Box pb={20}>

            <Swiper

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://meat-bazar.com/wp-content/uploads/2024/01/8c0c0ee54c56dc72393966ba9bbece1d.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://meat-bazar.com/wp-content/uploads/2024/01/367693895_706360938193752_872166108487316599_n-1024x1024.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://meat-bazar.com/wp-content/uploads/2024/01/367759056_706360928193753_1051459860970699514_n-1024x1024.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://meat-bazar.com/wp-content/uploads/2024/01/lamb-leg-wooden-board-prepared-cook-tomato-broccoli-salt-top-view-scaled-e1706637505220-800x800.webp" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://meat-bazar.com/wp-content/uploads/2024/01/d20d778705ddcd9918c8dad776ead01c.webp" />
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default AnimationInBanner;







