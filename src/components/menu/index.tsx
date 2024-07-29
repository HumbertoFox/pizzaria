import Link from 'next/link';

export default function MenuComponent() {
    return (
        <nav className='flex w-full justify-between font-sans text-sm font-bold sm:hidden bg-amber-500'>
            <Link href={'#promotion'} className='px-2.5 py-1.5 hover:bg-green-600 hover:text-white duration-700'>PROMOÇÕES</Link>
            <Link href={'#pizzas'} className='px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white'>PIZZAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white'>MASSAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white'>PRATOS</Link>
            <Link href={'/'} className='px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white'>SOBREMESAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white'>BEBIDAS</Link>
            <Link href={'/'} className='px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white'>PETISCOS</Link>
        </nav>
    );
};