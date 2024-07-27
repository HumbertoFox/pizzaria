import HeaderComponent from '@/components/header';
import MenuComponent from '@/components/menu';
import PromotionComponent from '@/components/promotion';

export default function Home() {
  return (
    <main className='w-10/12'>
      <HeaderComponent />
      <MenuComponent />
      <PromotionComponent />
    </main>
  );
};
