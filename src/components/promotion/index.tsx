import Image from 'next/image';
import SlideImage0 from '@/assets/pistoia-4461681_1920.jpg';
import SlideImage1 from '@/assets/bistro-498504_1920.jpg';
import SlideImage2 from '@/assets/pizza-744405_1920.jpg';
import SlideImage3 from '@/assets/pizza-4804750_1920.jpg';
import { ChevronLeft, ChevronRight } from 'react-feather';

const slides = [SlideImage0, SlideImage1, SlideImage2, SlideImage3];

export default function PromotionComponent() {
    return (
        <div className='flex w-full min-h-screen xl:min-h-full overflow-hidden relative' id='promotion'>
            {slides.map((element, index) => <Image src={element} key={index} style={{ width: '100%', height: '100%' }} alt='Image Pizzaria' priority />)}
            <div className='absolute inset-0 flex items-center justify-between'>
                <button type='button' title='next' className='h-full'>
                    <ChevronLeft size={40} />
                </button>
                <button type='button' title='back' className='h-full'>
                    <ChevronRight size={40} />
                </button>
            </div>
        </div>
    );
};