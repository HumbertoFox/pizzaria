'use client';

import DessertComponent from '@/components/dessert';
import DishesComponent from '@/components/dishes';
import DrinksComponent from '@/components/drinks';
import FooterComponent from '@/components/footer';
import HeaderComponent from '@/components/header';
import MenuComponent from '@/components/menu';
import PastaComponent from '@/components/pasta';
import PizzasComponent from '@/components/pizza';
import PromotionComponent from '@/components/promotion';
import ShoppingCartComponents from '@/components/shoppingcart';
import SnacksComponent from '@/components/snacks';
import { DetailsItemProps } from '@/interfaces/interfaces';
import {
  useEffect,
  useState
} from 'react';

export default function Home() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(true);
  const [isShoppingCartClicked, setIsDhoppingCartClicked] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<DetailsItemProps[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleClicked = (clicked: boolean) => setIsMenuClicked(clicked);
  const handleClickedShopping = (clicked: boolean) => setIsDhoppingCartClicked(clicked);
  const handleAddToCart = (item: DetailsItemProps) => setCartItems(prevItems => [...prevItems, item]);
  const handleRemoveItem = (index: number) => setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  const isItemInCart = (item: DetailsItemProps) => {
    return cartItems.some(cartItem => cartItem.name === item.name && cartItem.size === item.size);
  };

  useEffect(() => {
    setTotalAmount(calculateTotalAmount());

    function calculateTotalAmount() {
      return cartItems.reduce((total, item) => total + item.price, 0);
    }
  }, [cartItems]);
  return (
    <div className='w-full max-w-screen-2xl min-w-[375px]'>
      <HeaderComponent
        onClicked={handleClicked}
        onClickedShopping={handleClickedShopping}
        totalAmount={totalAmount}
      />
      <main className='relative max-w-screen-2xl min-w-[375px]'>
        <MenuComponent isClicked={isMenuClicked} />
        <PromotionComponent />
        <PizzasComponent
          onAddToCart={handleAddToCart}
          isItemInCart={isItemInCart}
        />
        <PastaComponent
          onAddToCart={handleAddToCart}
          isItemInCart={isItemInCart}
        />
        <DishesComponent
          onAddToCart={handleAddToCart}
          isItemInCart={isItemInCart}
        />
        <DessertComponent
          onAddToCart={handleAddToCart}
          isItemInCart={isItemInCart}
        />
        <DrinksComponent
          onAddToCart={handleAddToCart}
          isItemInCart={isItemInCart}
        />
        <SnacksComponent
          onAddToCart={handleAddToCart}
          isItemInCart={isItemInCart}
        />
        {isShoppingCartClicked && (
          <ShoppingCartComponents
            detailsorder={cartItems}
            onClickedShopping={handleClickedShopping}
            onUpdateTotal={setTotalAmount}
            onRemoveItem={handleRemoveItem}
          />
        )}
      </main>
      <FooterComponent />
    </div>
  );
}