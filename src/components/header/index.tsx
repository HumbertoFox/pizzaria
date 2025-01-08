'use client';

import { useState } from 'react';
import { HandleClickedProps } from '@/interfaces/interfaces';
import {
    Menu,
    ShoppingCart,
    X
} from 'react-feather';
import Image from 'next/image';
import Link from 'next/link';
import LogoPizzaria from '@/components/images/logo-pizza-fast-food.png';

export default function HeaderComponent({
    onClicked,
    onClickedShopping,
    totalAmount
}: HandleClickedProps) {
    const [isClickedMenu, setIsClickedMenu] = useState<boolean>(true);
    const [isClickedShopping, setIsClickedShopping] = useState<boolean>(false);

    const handleMenuClick = () => {
        const newState = !isClickedMenu;
        setIsClickedMenu(newState);
        onClicked(newState);
    };

    const handleShoppingClick = () => {
        const newState = !isClickedShopping;
        setIsClickedShopping(newState);
        onClickedShopping(newState);
    };

    return (
        <header className='flex w-full bg-amber-600 pt-1 px-3'>
            <Image
                className='w-[90px] duration-500 hidden sm:block animate-[detailsmsgDown_.7s_ease-in-out]'
                src={LogoPizzaria}
                alt='Logo Pizzaria'
                priority
            />
            {!isClickedShopping && (
                <div className='flex sm:hidden items-center relative cursor-pointer duration-500'>
                    {isClickedMenu ? (
                        <Menu
                            className='left-3 absolute duration-500'
                            aria-label='Open Menu'
                            onClick={handleMenuClick}
                        />
                    ) : (
                        <X
                            className='left-3 absolute duration-500'
                            aria-label='Close Menu'
                            onClick={handleMenuClick}
                        />
                    )}
                </div>
            )}
            <div className='w-full flex items-center justify-end gap-2.5 font-bold'>
                <div className='flex flex-col gap-2.5 sm:flex-row'>
                    <Link href={'/'} className='flex flex-col items-center text-nowrap'>
                        <p className='hidden text-xs sm:text-sm sm:block'>FAÇA SEU PEDIDO</p>
                        <h3 className='text-sm'>(81)90123-4567</h3>
                    </Link>
                    <Link href={'/'} className='hidden flex-col text-nowrap sm:block'>
                        <p className='text-xs sm:text-sm'>CONHEÇA NOSSO</p>
                        <h4 className='text-sm'>ESPAÇO</h4>
                    </Link>
                    <div className='flex flex-col items-center text-nowrap' >
                        <p className='text-xs sm:text-sm'>FINALISE SEU PEDIDO</p>
                        <button
                            className='flex items-center gap-1.5 hover:text-white duration-500'
                            type='button'
                            title={isClickedShopping
                                ? 'Voltar as Compras'
                                : 'Verificar Carrinho'
                            }
                            onClick={handleShoppingClick}
                        >
                            <ShoppingCart className='w-[20px]' />
                            <span className='text-sm font-sans font-bold'>R$ {totalAmount.toFixed(2)}</span>
                        </button>
                    </div>
                </div>
                <Image
                    className='w-[90px] block sm:hidden duration-500 animate-[detailsmsgDown_.7s_ease-in-out]'
                    src={LogoPizzaria}
                    alt='Logo Pizzaria'
                />
            </div>
        </header>
    );
}