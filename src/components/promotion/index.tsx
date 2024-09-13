'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import SlideImage0 from '@/assets/pistoia-4461681_1920.jpg';
import SlideImage1 from '@/assets/bistro-498504_1920.jpg';
import SlideImage2 from '@/assets/pizza-744405_1920.jpg';
import SlideImage3 from '@/assets/pizza-4804750_1920.jpg';
import SlideImage4 from '@/assets/pizza-499106_1920.jpg';
import SlideImage5 from '@/assets/pizza-1041104_1920.jpg';
import SlideImage6 from '@/assets/pizza-4205701_1920.jpg';
import SlideImage7 from '@/assets/session-2287673_1920.jpg';
import SlideImage8 from '@/assets/restaurant-1604013_1920.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function PromotionComponent() {

    return (
        <div className='flex w-full max-h-screen xl:max-h-full' id='promotion'>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{ clickable: true }}
                navigation={false}
                autoplay
                modules={[Pagination, Navigation, Autoplay]}
                className='w-full'
            >
                <SwiperSlide>
                    <Image src={SlideImage0}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage1}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage2}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage3}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage4}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage5}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage6}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage7}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage8}
                        className='w-full h-full'
                        alt='Image Pizzaria'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};