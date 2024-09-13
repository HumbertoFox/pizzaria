'use client';
import SlideImage0 from '@/assets/pizza-3870778_1920.jpg';
import SlideImage1 from '@/assets/pizza-7340648_1920.jpg';
import SlideImage2 from '@/assets/pizza-1239077_1920.jpg';
import SlideImage3 from '@/assets/pizza-3000274_1920.jpg';
import SlideImage4 from '@/assets/pizza-3604157_1920.jpg';
import SlideImage5 from '@/assets/pizza-4205701_1920.jpg';
import ItemsComponents from '../items';

export default function PizzasComponent() {

    return (
        <div className='w-full min-h-screen flex flex-col items-center xl:max-h-full px-3 pb-9' id='pizzas'>
            <h2 className='text-center font-bold text-4xl cursor-default'>Pizzas</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-5 pt-3'>
                <ItemsComponents
                    name='Pizza 1'
                    size='Grande'
                    price={45.50}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage0}
                />
                <ItemsComponents
                    name='Pizza 2'
                    size='Grande'
                    price={65.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage1}
                />
                <ItemsComponents
                    name='Pizza 3'
                    size='Grande'
                    price={55.50}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage2}
                />
                <ItemsComponents
                    name='Pizza 4'
                    size='Media'
                    price={65.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage3}
                />
                <ItemsComponents
                    name='Pizza 5'
                    size='Media'
                    price={65.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage4}
                />
                <ItemsComponents
                    name='Pizza 6'
                    size='Media'
                    price={65.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage5}
                />
            </div>
        </div>
    );
};