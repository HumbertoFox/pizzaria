'use client';
import { OrderComponentProps } from '@/interfaces/interfaces';
import SlideImage0 from '@/assets/dishes/00.jpg';
import SlideImage1 from '@/assets/dishes/01.jpg';
import SlideImage2 from '@/assets/dishes/02.jpg';
import SlideImage3 from '@/assets/dishes/03.jpg';
import SlideImage4 from '@/assets/dishes/04.jpg';
import SlideImage5 from '@/assets/dishes/05.jpg';
import ItemsComponents from '../items';

const dishes = [
    {
        name: 'Prato 1',
        size: '1 Pessoa',
        price: 45.50,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        quantity: 1,
        image: SlideImage0
    },
    {
        name: 'Prato 2',
        size: '1 Pessoa',
        price: 55.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        quantity: 1,
        image: SlideImage1
    },
    {
        name: 'Prato 3',
        size: '1 Pessoa',
        price: 55.50,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        quantity: 1,
        image: SlideImage2
    },
    {
        name: 'Prato 4',
        size: '2 Pessoa',
        price: 75.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        quantity: 1,
        image: SlideImage3
    },
    {
        name: 'Prato 5',
        size: '2 Pessoa',
        price: 35.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        quantity: 1,
        image: SlideImage4
    },
    {
        name: 'Prato 6',
        size: '2 Pessoa',
        price: 85.00,
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        quantity: 1,
        image: SlideImage5
    }
];

export default function DishesComponent({ onAddToCart, isItemInCart }: OrderComponentProps) {

    return (
        <div className='w-full min-h-screen flex flex-col items-center xl:max-h-full px-3 pb-9' id='dishes'>
            <h2 className='text-center font-bold text-4xl cursor-default'>Pratos</h2>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-items-center gap-5 pt-3'>
                {dishes.map((dishe, index) => (
                    <ItemsComponents
                        key={index}
                        name={dishe.name}
                        size={dishe.size}
                        price={dishe.price}
                        details={dishe.details}
                        image={dishe.image}
                        quantity={dishe.quantity}
                        onAddToCart={onAddToCart}
                        isItemInCart={isItemInCart}
                    />
                ))}
            </div>
        </div>
    );
};