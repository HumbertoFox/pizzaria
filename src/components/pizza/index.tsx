'use client';
import { OrderComponentProps } from '@/interfaces/interfaces';
import SlideImage0 from '@/assets/pizza/00.jpg';
import SlideImage1 from '@/assets/pizza/01.jpg';
import SlideImage2 from '@/assets/pizza/02.jpg';
import SlideImage3 from '@/assets/pizza/03.jpg';
import SlideImage4 from '@/assets/pizza/04.jpg';
import SlideImage5 from '@/assets/pizza/05.jpg';
import ItemsComponents from '../items';

const pizzas = [
    {
        name: 'Pizza 1',
        size: 'Grande',
        price: 45.50,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage0
    },
    {
        name: 'Pizza 2',
        size: 'Grande',
        price: 65.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage1
    },
    {
        name: 'Pizza 3',
        size: 'Grande',
        price: 55.50,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage2
    },
    {
        name: 'Pizza 4',
        size: 'Media',
        price: 65.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage3
    },
    {
        name: 'Pizza 5',
        size: 'Media',
        price: 65.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage4
    },
    {
        name: 'Pizza 6',
        size: 'Media',
        price: 65.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage5
    }
];

export default function PizzasComponent({ onAddToCart, isItemInCart }: OrderComponentProps) {

    return (
        <div className='w-full min-h-screen flex flex-col items-center xl:max-h-full px-3 pb-9' id='pizzas'>
            <h2 className='text-center font-bold text-4xl cursor-default'>Pizzas</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-5 pt-3'>
                {pizzas.map((pizza, index) => (
                    <ItemsComponents
                        key={index}
                        name={pizza.name}
                        size={pizza.size}
                        price={pizza.price}
                        details={pizza.details}
                        image={pizza.image}
                        onAddToCart={onAddToCart}
                        isItemInCart={isItemInCart}
                    />
                ))}
            </div>
        </div>
    );
};