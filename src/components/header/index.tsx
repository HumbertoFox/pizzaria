import Image from 'next/image';
import Link from 'next/link';
import LogoPizzaria from '@/assets/logo-pizza-fast-food.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function HeaderComponent() {
    return (
        <header className='flex pt-2.5'>
            <div className='flex items-center gap-2.5 font-sans font-bold'>
                <Image src={LogoPizzaria} width={100} height={100} alt='Logo Pizzaria' priority />
                <div>
                    <Link href={'/'}>
                        <p>FAÇA SEU PEDIDO</p>
                        <h3>(81)90123-4567</h3>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <p>CONHEÇA NOSSO</p>
                        <h4>ESPAÇO</h4>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <p>FINALISE SEU PEDIDO</p>
                        <div className='flex gap-1.5'>
                            <FontAwesomeIcon icon={faCartShopping} className='w-5' />
                            <span className='text-xl font-bold'>R$</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};