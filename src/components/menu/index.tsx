import Link from 'next/link';

export default function MenuComponent() {
    return (
        <nav className='flex justify-between gap-x-3.5 font-sans font-bold'>
            <Link href={'/'} className='p-2.5'>PROMOÇÕES</Link>
            <Link href={'/'} className='p-2.5'>PIZZAS</Link>
            <Link href={'/'} className='p-2.5'>MASSAS</Link>
            <Link href={'/'} className='p-2.5'>PRATOS</Link>
            <Link href={'/'} className='p-2.5'>SOBREMESAS</Link>
            <Link href={'/'} className='p-2.5'>BEBIDAS</Link>
            <Link href={'/'} className='p-2.5'>PETISCOS</Link>
        </nav>
    );
};