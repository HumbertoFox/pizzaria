'use client';
import { useEffect, useState } from 'react';
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
import { ChevronLeft, ChevronRight } from 'react-feather';

const slides = [SlideImage0, SlideImage1, SlideImage2, SlideImage3, SlideImage4, SlideImage5, SlideImage6, SlideImage7, SlideImage8];

export default function PromotionComponent() {
    const [curr, setCurr] = useState(0);

    const back = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className='relative w-full max-h-screen xl:max-h-full overflow-hidden' id='promotion'>
            <div className='flex transition-transform duration-500 ease-out' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((element, index) => (
                    <div key={index} className='w-full flex-shrink-0'>
                        <Image className='object-cover' src={element} width={1920} height={1186} alt='Image Pizzaria' priority aria-label='Previous Slide' />
                    </div>
                ))}
            </div>
            <div className='absolute inset-0 flex items-center justify-between'>
                <button type='button' title='back' className='h-full opacity-0 duration-500 hover:opacity-100 button' onClick={back}>
                    <ChevronLeft size={40} />
                </button>
                <button type='button' title='next' className='h-full opacity-0 duration-500 hover:opacity-100 button' onClick={next}>
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
};