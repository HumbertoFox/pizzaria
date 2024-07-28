import Image from 'next/image';
import Link from 'next/link';
import LogoPizzaria from '@/assets/logo-pizza-fast-food.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function HeaderComponent() {
    return (
        <header className='flex float-end pt-2.5'>
            <div className='flex items-center gap-2.5 font-bold'>
                <Link href={'/'} className='flex flex-col items-center'>
                    <p className='text-sm sm:text-xs'>FAÇA SEU PEDIDO</p>
                    <h3 className='text-sm'>(81)90123-4567</h3>
                </Link>
                <Link href={'/'} className='flex flex-col'>
                    <p className='text-sm sm:text-xs'>CONHEÇA NOSSO</p>
                    <h4 className='text-sm'>ESPAÇO</h4>
                </Link>
                <Link href={'/'} className='flex flex-col'>
                    <p className='text-sm sm:text-xs'>FINALISE SEU PEDIDO</p>
                    <div className='flex items-center gap-1.5'>
                        <FontAwesomeIcon icon={faCartShopping} className='w-5' />
                        <span className='text-sm font-sans font-bold'>R$</span>
                    </div>
                </Link>
                <Image src={LogoPizzaria} width={90} height={90} alt='Logo Pizzaria' priority />
            </div>
        </header>
    );
};