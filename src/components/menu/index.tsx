'use client';
import { ClickedMenu } from '@/interfaces/interfaces';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const ClassLinks = 'px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white';

export default function MenuComponent({ isClicked }: ClickedMenu) {
    const [isVisible, setIsVisible] = useState(isClicked);

    useEffect(() => {
        setIsVisible(isClicked);
    }, [isClicked]);

    return (
        <nav className={`w-full flex justify-between font-sans text-sm font-bold bg-amber-500 sm:absolute sm:left-0 sm:flex-col sm:z-10 sm:w-32 sm:text-center ${isVisible ? 'hidden' : 'flex'}`}>
            <Link href={'#promotion'} className={ClassLinks}>PROMOÇÕES</Link>
            <Link href={'#pizzas'} className={ClassLinks}>PIZZAS</Link>
            <Link href={'/'} className={ClassLinks}>MASSAS</Link>
            <Link href={'/'} className={ClassLinks}>PRATOS</Link>
            <Link href={'/'} className={ClassLinks}>SOBREMESAS</Link>
            <Link href={'/'} className={ClassLinks}>BEBIDAS</Link>
            <Link href={'/'} className={ClassLinks}>PETISCOS</Link>
        </nav>
    );
};