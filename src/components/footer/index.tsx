import Link from 'next/link';
import {
    Facebook,
    Instagram,
    Map,
    MessageCircle,
    PhoneCall,
    Smartphone,
    Twitter
} from 'react-feather';

const ClassLinksContacts = 'flex items-center gap-2 p-1 hover:text-white duration-500';

export default function FooterComponent() {
    return (
        <footer className='w-full flex flex-col-reverse items-center gap-3 font-semibold bg-amber-600 p-2 sm:flex-col'>
            <address className='text-xs md:text-base cursor-default'>
                <Map />
                <p>Endereço:</p>
                <p>PE-022, 344-Box-B, Nossa senhora da Conceição, Paulista-PE.</p>
                <p>Paulista, 53.421-420, BR.</p>
                <p>Contato: 81 98807-5408 - WhatsApp.</p>
            </address>
            <div className='w-full flex justify-between'>
                <div className='text-xs md:text-base'>
                    <h2 className='text-center cursor-default'>Contato</h2>
                    <Link
                        className={ClassLinksContacts}
                        href={'/'}
                    >
                        <PhoneCall />
                        <p>(81) 3012-3456</p>
                    </Link>
                    <Link
                        className={ClassLinksContacts}
                        href={'/'}
                    >
                        <Smartphone />
                        <p>(81) 90123-4567</p>
                    </Link>
                    <Link
                        className={ClassLinksContacts}
                        href={'/'}
                    >
                        <MessageCircle />
                        <p>+55 (81) 0123-4567</p>
                    </Link>
                </div>
                <div className='flex flex-col justify-center gap-3 items-center text-xs md:text-base'>
                    <h2 className='cursor-default'>Redes Sociais</h2>
                    <div className='flex gap-4'>
                        <Link href={'/'}>
                            <Instagram className='hover:text-white duration-500' />
                        </Link>
                        <Link href={'/'}>
                            <Facebook className='hover:text-white duration-500' />
                        </Link>
                        <Link href={'/'}>
                            <Twitter className='hover:text-white duration-500' />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}