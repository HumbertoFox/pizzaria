import Image from 'next/image';
import ImagePizzaria from '@/assets/pistoia-4461681_1920.jpg';

export default function PromotionComponent() {
    return (
        <div className='w-full'>
            <Image src={ImagePizzaria} style={{ width: '100%', height: '100%' }} alt='Image Pizzaria' priority />
        </div>
    );
};