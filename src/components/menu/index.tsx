import Link from 'next/link';
const ClassLinks = 'px-2.5 py-1.5 hover:bg-green-600 duration-700 hover:text-white';

export default function MenuComponent() {
    console.log(ClassLinks);
    return (
        <nav className='flex w-full justify-between font-sans text-sm font-bold sm:hidden bg-amber-500'>
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