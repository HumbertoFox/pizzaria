import Link from "next/link"
import { Facebook, Instagram, Map, MessageCircle, PhoneCall, Smartphone, Twitter } from "react-feather";

export default function FooterComponent() {
    return (
        <footer className='w-full flex justify-between text-nowrap xl:text-sm'>
            <div className="md:text-xs">
                <h2>Contato</h2>
                <Link href={'/'} className='flex items-center'>
                    <PhoneCall />
                    <p>(81) 3012-3456</p>
                </Link>
                <Link href={'/'} className='flex items-center'>
                    <Smartphone />
                    <p>(81) 90123-4567</p>
                </Link>
                <Link href={'/'} className='flex items-center'>
                    <MessageCircle />
                    <p>+55 (81) 0123-4567</p>
                </Link>
            </div>
            <address className="md:text-xs">
                <Map />
                <p>Endereço:</p>
                <p>PE-022, 344-Box-B, Nossa senhora da Conceição, Paulista-PE.</p>
                <p>Paulista, 53.421-420, BR.</p>
                <p>Contato: 81 98807-5408 - WhatsApp.</p>
            </address>
            <div className="md:text-xs">
                <h2>Redes Sociais</h2>
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
        </footer>
    );
};