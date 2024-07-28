import Link from 'next/link';

export default function MenuComponent() {
    return (
        <nav className='flex w-full justify-between font-sans text-sm font-bold sm:hidden'>
            <Link href={'#promotion'} className='px-2.5 py-1.5'>PROMOÇÕES</Link>
            <Link href={'#pizzas'} className='px-2.5 py-1.5'>PIZZAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5'>MASSAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5'>PRATOS</Link>
            <Link href={'/'} className='px-2.5 py-1.5'>SOBREMESAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5'>BEBIDAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5'>PETISCOS</Link>
        </nav>
    );
};