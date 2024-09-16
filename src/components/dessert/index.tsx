'use client';
import { OrderComponentProps } from '@/interfaces/interfaces';
import SlideImage0 from '@/assets/dessert/00.jpg';
import SlideImage1 from '@/assets/dessert/01.jpg';
import SlideImage2 from '@/assets/dessert/02.jpg';
import SlideImage3 from '@/assets/dessert/03.jpg';
import SlideImage4 from '@/assets/dessert/04.jpg';
import SlideImage5 from '@/assets/dessert/05.jpg';
import ItemsComponents from '../items';

const desserts = [
    {
        name: 'Sobremesa 1',
        size: '',
        price: 35.50,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage0
    },
    {
        name: 'Sobremesa 2',
        size: '',
        price: 25.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage1
    },
    {
        name: 'Sobremesa 3',
        size: '',
        price: 45.50,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage2
    },
    {
        name: 'Sobremesa 4',
        size: '',
        price: 25.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage3
    },
    {
        name: 'Sobremesa 5',
        size: '',
        price: 21.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage4
    },
    {
        name: 'Sobremesa 6',
        size: '',
        price: 35.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        image: SlideImage5
    }
];

export default function DessertComponent({ onAddToCart, isItemInCart }: OrderComponentProps) {

    return (
        <div className='w-full min-h-screen flex flex-col items-center xl:max-h-full px-3 pb-9' id='dessert'>
            <h2 className='text-center font-bold text-4xl cursor-default'>Sobremesas</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-5 pt-3'>
                {desserts.map((dessert, index) => (
                    <ItemsComponents
                        key={index}
                        name={dessert.name}
                        size={dessert.size}
                        price={dessert.price}
                        details={dessert.details}
                        image={dessert.image}
                        onAddToCart={onAddToCart}
                        isItemInCart={isItemInCart}
                    />
                ))}
            </div>
        </div>
    );
};