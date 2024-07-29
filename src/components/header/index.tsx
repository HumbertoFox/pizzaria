import Image from 'next/image';
import Link from 'next/link';
import LogoPizzaria from '@/assets/logo-pizza-fast-food.png';
import { Menu, ShoppingCart, X } from 'react-feather';

export default function HeaderComponent() {
    return (
        <header className='flex w-full pt-1 bg-amber-600'>
            <div className='flex items-center relative'>
                <Menu className='hidden left-3 sm:block absolute' />
                <X className='hidden left-3 absolute' />
            </div>
            <div className='w-full flex items-center justify-end gap-2.5 font-bold'>
                <div className='flex gap-2.5 sm:flex-col'>
                    <Link href={'/'} className='flex flex-col items-center text-nowrap'>
                        <p className='text-sm sm:text-xs sm:hidden'>FAÇA SEU PEDIDO</p>
                        <h3 className='text-sm'>(81)90123-4567</h3>
                    </Link>
                    <Link href={'/'} className='flex flex-col text-nowrap sm:hidden'>
                        <p className='text-sm sm:text-xs'>CONHEÇA NOSSO</p>
                        <h4 className='text-sm'>ESPAÇO</h4>
                    </Link>
                    <Link href={'/'} className='flex flex-col text-nowrap'>
                        <p className='text-sm sm:text-xs'>FINALISE SEU PEDIDO</p>
                        <div className='flex items-center gap-1.5'>
                            <ShoppingCart size={20} />
                            <span className='text-sm font-sans font-bold'>R$</span>
                        </div>
                    </Link>
                </div>
                <Image src={LogoPizzaria} width={90} height={90} alt='Logo Pizzaria' priority />
            </div>
        </header>
    );
};