'use client';
import { ClickedMenu } from '@/interfaces/interfaces';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const CLASS_LINKS = 'px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white';

export default function MenuComponent({ isClicked }: ClickedMenu) {
    const [isVisible, setIsVisible] = useState(isClicked);
    const [isWideScreen, setIsWideScreen] = useState<boolean>(true);

    useEffect(() => {
        setIsVisible(isClicked);
    }, [isClicked]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(min-width: 790px)');
            setIsWideScreen(mediaQuery.matches);

            const handleResize = () => setIsWideScreen(mediaQuery.matches);

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const navClassName = `w-full flex justify-between font-sans text-sm font-bold bg-amber-500 sm:absolute sm:left-0 sm:flex-col sm:z-10 sm:w-32 sm:text-center ${isVisible && !isWideScreen && 'hidden'}`;

    return (
        <nav className={navClassName}>
            <Link href={'#promotion'} className={CLASS_LINKS}>PROMOÇÕES</Link>
            <Link href={'#pizzas'} className={CLASS_LINKS}>PIZZAS</Link>
            <Link href={'/'} className={CLASS_LINKS}>MASSAS</Link>
            <Link href={'/'} className={CLASS_LINKS}>PRATOS</Link>
            <Link href={'/'} className={CLASS_LINKS}>SOBREMESAS</Link>
            <Link href={'/'} className={CLASS_LINKS}>BEBIDAS</Link>
            <Link href={'/'} className={CLASS_LINKS}>PETISCOS</Link>
        </nav>
    );
};