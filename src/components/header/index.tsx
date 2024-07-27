import Image from 'next/image';
import LogoPizzaria from '@/assets/logo-pizza-fast-food.png';
import Link from 'next/link';

export default function HeaderComponent() {
    return (
        <header>
            <div>
                <Image src={LogoPizzaria} alt='Logo Pizzaria' width={100} />
                <div>
                    <Link href={'/'}>
                        <p>Faça Seu Pedido</p>
                        <h3>(81)90123-4567</h3>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <p>conheça nossa</p>
                        <h4>Unidade</h4>
                    </Link>
                </div>
                <div>
                    <Link href={'/'}>
                        <p>Finalize seu Pedido</p>
                        <div>
                            <Image src={''} alt='Icon Carrinho' />
                            <span>{''}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};