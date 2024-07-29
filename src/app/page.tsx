import FooterComponent from '@/components/footer';
import HeaderComponent from '@/components/header';
import MenuComponent from '@/components/menu';
import PizzasComponent from '@/components/pizza';
import PromotionComponent from '@/components/promotion';

export default function Home() {
  return (
    <main className='w-10/12 lg:w-full sm:h-dvh'>
      <HeaderComponent />
      <MenuComponent />
      <PromotionComponent />
      <PizzasComponent />
      <FooterComponent />
    </main>
  );
};
