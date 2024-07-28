import Image from 'next/image';
import SlideImage0 from '@/assets/pizza-3870778_1920.jpg';
import SlideImage1 from '@/assets/pizza-7340648_1920.jpg';
import SlideImage2 from '@/assets/pizza-1239077_1920.jpg';
import SlideImage3 from '@/assets/pizza-3000274_1920.jpg';
import SlideImage4 from '@/assets/pizza-3604157_1920.jpg';
import SlideImage5 from '@/assets/pizza-4205701_1920.jpg';

const slides = [SlideImage0, SlideImage1, SlideImage2, SlideImage3, SlideImage4, SlideImage5];

export default function PizzasComponent() {
    return (
        <div className='flex w-full max-h-screen xl:min-h-full overflow-hidden relative' id='pizzas'>
            {slides.map((element, index) => <Image src={element} key={index} alt='Image Pizzaria' priority />)}
        </div>
    );
};