'use client';
import { useState } from 'react';
import HeaderComponent from '@/components/header';
import MenuComponent from '@/components/menu';

export default function ShoppingCartLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(true);

  const handleClicked = (clicked: boolean) => {
    setIsMenuClicked(clicked)
  };

  return (
    <main className='w-[1440px] mx-auto lg:w-full min-h-screen sm:min-w-[375px] '>
      <HeaderComponent onClicked={handleClicked} />
      <MenuComponent isClicked={isMenuClicked} />
      {children}
    </main>
  );
};