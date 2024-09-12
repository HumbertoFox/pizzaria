'use client';
import { useState } from 'react';
import FooterComponent from '@/components/footer';
import HeaderComponent from '@/components/header';
import MenuComponent from '@/components/menu';
import PizzasComponent from '@/components/pizza';
import PromotionComponent from '@/components/promotion';

export default function Home() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(true);
  const handleClicked = (clicked: boolean) => {
    setIsMenuClicked(clicked)
  };
  return (
    <main className='w-10/12 lg:w-full sm:h-dvh'>
      <HeaderComponent onClicked={handleClicked} />
      <MenuComponent isClicked={isMenuClicked} />
      <PromotionComponent />
      <PizzasComponent />
      <FooterComponent />
    </main>
  );
};