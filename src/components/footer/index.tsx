import Link from 'next/link';
import { Facebook, Instagram, Map, MessageCircle, PhoneCall, Smartphone, Twitter } from 'react-feather';

const ClassLinksContacts = 'flex items-center gap-2 p-1';

export default function FooterComponent() {
    return (
        <footer className='w-full flex flex-col items-center gap-3 bg-amber-600 p-2 xl:text-sm sm:items-center sm:flex-col-reverse'>
            <address className='md:text-xs cursor-default'>
                <Map />
                <p>Endereço:</p>
                <p>PE-022, 344-Box-B, Nossa senhora da Conceição, Paulista-PE.</p>
                <p>Paulista, 53.421-420, BR.</p>
                <p>Contato: 81 98807-5408 - WhatsApp.</p>
            </address>
            <div className='w-full flex justify-between'>
                <div className='md:text-xs'>
                    <h2 className='text-center cursor-default'>Contato</h2>
                    <Link href={'/'} className={ClassLinksContacts}>
                        <PhoneCall />
                        <p>(81) 3012-3456</p>
                    </Link>
                    <Link href={'/'} className={ClassLinksContacts}>
                        <Smartphone />
                        <p>(81) 90123-4567</p>
                    </Link>
                    <Link href={'/'} className={ClassLinksContacts}>
                        <MessageCircle />
                        <p>+55 (81) 0123-4567</p>
                    </Link>
                </div>
                <div className='flex flex-col justify-center gap-3 items-center md:text-xs'>
                    <h2 className='cursor-default'>Redes Sociais</h2>
                    <div className='flex gap-4'>
                        <Link href={'/'}>
                            <Instagram />
                        </Link>
                        <Link href={'/'}>
                            <Twitter />
                        </Link>
                        <Link href={'/'}>
                            <Facebook />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};