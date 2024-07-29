'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import SlideImage0 from '@/assets/pizza-3870778_1920.jpg';
import SlideImage1 from '@/assets/pizza-7340648_1920.jpg';
import SlideImage2 from '@/assets/pizza-1239077_1920.jpg';
import SlideImage3 from '@/assets/pizza-3000274_1920.jpg';
import SlideImage4 from '@/assets/pizza-3604157_1920.jpg';
import SlideImage5 from '@/assets/pizza-4205701_1920.jpg';

const slides = [SlideImage0, SlideImage1, SlideImage2, SlideImage3, SlideImage4, SlideImage5];

export default function PizzasComponent() {
    const [curr, setCurr] = useState(0);

    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex w-full max-h-screen xl:max-h-full overflow-hidden relative' id='pizzas'>
            <div className='flex transition-transform duration-500 ease-out' style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((element, index) => (
                    <div key={index} className='w-full flex-shrink-0'>
                        <Image src={element} width={1920} height={1186} alt='Image Pizzaria' priority aria-label='Previous Slide' />
                    </div>
                ))}
            </div>
        </div>
    );
};