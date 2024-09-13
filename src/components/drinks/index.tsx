'use client';
import SlideImage0 from '@/assets/drinks/00.jpg';
import SlideImage1 from '@/assets/drinks/01.jpg';
import SlideImage2 from '@/assets/drinks/02.jpg';
import SlideImage3 from '@/assets/drinks/03.jpg';
import SlideImage4 from '@/assets/drinks/04.jpg';
import SlideImage5 from '@/assets/drinks/05.jpg';
import ItemsComponents from '../items';

export default function DrinksComponent() {

    return (
        <div className='w-full min-h-screen flex flex-col items-center xl:max-h-full px-3 pb-9' id='drinks'>
            <h2 className='text-center font-bold text-4xl cursor-default'>Bebidas</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-5 pt-3'>
                <ItemsComponents
                    name='Bebida 1'
                    size=''
                    price={25.50}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage0}
                />
                <ItemsComponents
                    name='Bebida 2'
                    size=''
                    price={26.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage1}
                />
                <ItemsComponents
                    name='Bebida 3'
                    size=''
                    price={21.50}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage2}
                />
                <ItemsComponents
                    name='Bebida 4'
                    size=''
                    price={20.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage3}
                />
                <ItemsComponents
                    name='Bebida 5'
                    size=''
                    price={23.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage4}
                />
                <ItemsComponents
                    name='Bebida 6'
                    size=''
                    price={22.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage5}
                />
            </div>
        </div>
    );
};