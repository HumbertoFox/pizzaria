'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import SlideImage0 from '@/assets/pizzeria/00.jpg';
import SlideImage1 from '@/assets/pizzeria/01.jpg';
import SlideImage2 from '@/assets/pizzeria/02.jpg';
import SlideImage3 from '@/assets/pizzeria/03.jpg';
import SlideImage4 from '@/assets/pizzeria/04.jpg';
import SlideImage5 from '@/assets/pizzeria/05.jpg';
import SlideImage6 from '@/assets/pizzeria/06.jpg';
import SlideImage7 from '@/assets/pizzeria/07.jpg';
import SlideImage8 from '@/assets/pizzeria/08.jpg';
import SlideImage9 from '@/assets/pizzeria/09.jpg';
import SlideImage10 from '@/assets/pizzeria/10.jpg';
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
                        alt='Image Pizzaria 1'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage1}
                        className='w-full h-full'
                        alt='Image Pizzaria 2'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage2}
                        className='w-full h-full'
                        alt='Image Pizzaria 3'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage3}
                        className='w-full h-full'
                        alt='Image Pizzaria 4'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage4}
                        className='w-full h-full'
                        alt='Image Pizzaria 5'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage5}
                        className='w-full h-full'
                        alt='Image Pizzaria 6'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage6}
                        className='w-full h-full'
                        alt='Image Pizzaria 7'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage7}
                        className='w-full h-full'
                        alt='Image Pizzaria 8'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage8}
                        className='w-full h-full'
                        alt='Image Pizzaria 9'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage9}
                        className='w-full h-full'
                        alt='Image Pizzaria 10'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={SlideImage10}
                        className='w-full h-full'
                        alt='Image Pizzaria 11'
                        aria-label='Slide'
                        priority
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};