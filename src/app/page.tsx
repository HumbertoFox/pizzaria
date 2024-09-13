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
    <main className='max-w-[1440px] mx-auto lg:w-full min-h-screen sm:min-w-[375px] '>
      <HeaderComponent onClicked={handleClicked} />
      <MenuComponent isClicked={isMenuClicked} />
      <PromotionComponent />
      <PizzasComponent />
      <FooterComponent />
    </main>
  );
};