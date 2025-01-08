'use client';

import { ClickedMenuProps } from '@/interfaces/interfaces';
import {
    useEffect,
    useState
} from 'react';
import Link from 'next/link';

const CLASS_LINKS = 'px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white';

export default function MenuComponent({
    isClicked
}: ClickedMenuProps) {
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
    return (
        <nav className={`w-32 flex flex-col sm:justify-between font-sanstext-sm font-bold
            sm:bg-amber-500 animate-[detailsmsgDown_.7s_ease-in-out] absolute sm:static sm:left-0
            sm:flex-row z-10 sm:w-full text-center bg-amber-500/50 rounded-b-md sm:rounded-none
            ${isVisible && !isWideScreen && 'hidden'}`
        }>
            <Link href={'/#promotion'} className={CLASS_LINKS}>PROMOÇÕES</Link>
            <Link href={'/#pizzas'} className={CLASS_LINKS}>PIZZAS</Link>
            <Link href={'/#pasta'} className={CLASS_LINKS}>MASSAS</Link>
            <Link href={'/#dishes'} className={CLASS_LINKS}>PRATOS</Link>
            <Link href={'/#dessert'} className={CLASS_LINKS}>SOBREMESAS</Link>
            <Link href={'/#drinks'} className={CLASS_LINKS}>BEBIDAS</Link>
            <Link href={'/#snacks'} className={CLASS_LINKS}>PETISCOS</Link>
        </nav>
    );
}