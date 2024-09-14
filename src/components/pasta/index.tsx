'use client';
import { OrderComponentProps } from '@/interfaces/interfaces';
import SlideImage0 from '@/assets/pasta/00.jpg';
import SlideImage1 from '@/assets/pasta/01.jpg';
import SlideImage2 from '@/assets/pasta/02.jpg';
import SlideImage3 from '@/assets/pasta/03.jpg';
import SlideImage4 from '@/assets/pasta/04.jpg';
import SlideImage5 from '@/assets/pasta/05.jpg';
import ItemsComponents from '../items';

export default function PastaComponent({ onAddToCart }: OrderComponentProps) {

    return (
        <div className='w-full min-h-screen flex flex-col items-center xl:max-h-full px-3 pb-9' id='pasta'>
            <h2 className='text-center font-bold text-4xl cursor-default'>Massas</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-5 pt-3'>
                <ItemsComponents
                    name='Massa 1'
                    size='1 Pessoas'
                    price={35.50}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage0}
                    onAddToCart={onAddToCart}
                />
                <ItemsComponents
                    name='Massa 2'
                    size='1 Pessoas'
                    price={45.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage1}
                    onAddToCart={onAddToCart}
                />
                <ItemsComponents
                    name='Massa 3'
                    size='1 Pessoas'
                    price={55.50}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage2}
                    onAddToCart={onAddToCart}
                />
                <ItemsComponents
                    name='Massa 4'
                    size='2 Pessoa'
                    price={75.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage3}
                    onAddToCart={onAddToCart}
                />
                <ItemsComponents
                    name='Massa 5'
                    size='2 Pessoa'
                    price={65.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage4}
                    onAddToCart={onAddToCart}
                />
                <ItemsComponents
                    name='Massa 6'
                    size='2 Pessoa'
                    price={85.00}
                    details='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    image={SlideImage5}
                    onAddToCart={onAddToCart}
                />
            </div>
        </div>
    );
};