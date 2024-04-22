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

const AnimationInBanner = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    return (
        <div>
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
                    <Image width={250} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={250} height={400} alt='card-image' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AnimationInBanner;







