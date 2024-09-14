'use client';
import { useState } from 'react';
import { DetailsItemProps } from '@/interfaces/interfaces';
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
import ShoppingCartComponents from '@/components/shoppingcart';

export default function Home() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(true);
  const [isShoppingCartClicked, setIsDhoppingCartClicked] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<DetailsItemProps[]>([]);

  const handleClicked = (clicked: boolean) => {
    setIsMenuClicked(clicked)
  };

  const handleClickedShopping = (clicked: boolean) => {
    setIsDhoppingCartClicked(clicked)
  };

  const handleAddToCart = (item: DetailsItemProps) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <main className='relative w-[1440px] mx-auto lg:w-full min-h-screen sm:min-w-[375px] '>
      <HeaderComponent onClicked={handleClicked} onClickedShopping={handleClickedShopping} />
      <MenuComponent isClicked={isMenuClicked} />
      <PromotionComponent />
      <PizzasComponent onAddToCart={handleAddToCart} />
      <PastaComponent onAddToCart={handleAddToCart} />
      <DishesComponent onAddToCart={handleAddToCart} />
      <DessertComponent onAddToCart={handleAddToCart} />
      <DrinksComponent onAddToCart={handleAddToCart} />
      <SnacksComponent onAddToCart={handleAddToCart} />
      <FooterComponent />
      {isShoppingCartClicked && (<ShoppingCartComponents detailsorder={cartItems} />)}
    </main>
  );
};