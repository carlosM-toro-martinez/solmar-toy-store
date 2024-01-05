import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useStyles } from './carousel.styles';


function CarouselComponent() {
    const classes = useStyles();
    const imageUrls = [
        'https://res.cloudinary.com/potosi/image/upload/v1704343184/mauri/1_m3v2fs.webp',
        'https://res.cloudinary.com/potosi/image/upload/v1704343184/mauri/2_thzrjh.webp',
        'https://res.cloudinary.com/potosi/image/upload/v1704053107/mauri/a7fb6c43-e61b-4008-bf6f-d11812112140_la2ytb.jpg',
        'https://res.cloudinary.com/potosi/image/upload/v1704053107/mauri/07a839b3-9463-42c9-a6d5-5bcb38839f49_llbfss.jpg'

    ];

    return (
        <>
            <Swiper
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={classes.swiper}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
            >
                {imageUrls.map((imageUrl, index) => (
                    <SwiperSlide key={index} className={classes.swiperSlide}>
                        <img src={imageUrl} alt={`Slide ${index + 1}`} className={classes.swiperSlideImage} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default CarouselComponent