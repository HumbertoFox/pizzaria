'use client';
import { useState } from 'react';
import FooterComponent from '@/components/footer';
import HeaderComponent from '@/components/header';
import MenuComponent from '@/components/menu';
import PizzasComponent from '@/components/pizza';
import PromotionComponent from '@/components/promotion';
import PastaComponent from '@/components/pasta';
import DishesComponent from '@/components/dishes';
import DessertComponent from '@/components/dessert';
import DrinksComponent from '@/components/drinks';
import SnacksComponent from '@/components/snacks';

export default function Home() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(true);

  const handleClicked = (clicked: boolean) => {
    setIsMenuClicked(clicked)
  };

  return (
    <main className='w-[1440px] mx-auto lg:w-full min-h-screen sm:min-w-[375px] '>
      <HeaderComponent onClicked={handleClicked} />
      <MenuComponent isClicked={isMenuClicked} />
      <PromotionComponent />
      <PizzasComponent />
      <PastaComponent />
      <DishesComponent />
      <DessertComponent />
      <DrinksComponent />
      <SnacksComponent />
      <FooterComponent />
    </main>
  );
};