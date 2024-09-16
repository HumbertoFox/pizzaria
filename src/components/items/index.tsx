'use client';
import { useState } from "react";
import { ItemsComponentsProps } from "@/interfaces/interfaces";
import Image from "next/image";

export default function ItemsComponents({ name, size, price, details, quantity, image, onAddToCart, isItemInCart }: ItemsComponentsProps) {
    const [isClickedDetails, setIsClieckedDetails] = useState<boolean>(false);

    const itemInCart = isItemInCart({ name, size, price, details, quantity, image });

    const handleDetailClick = () => setIsClieckedDetails(!isClickedDetails);

    const handleAddToCart = () => {
        if (onAddToCart) {
            onAddToCart({ name, size, price, details, quantity, image });
        };
    };

    return (
        <section className='w-auto h-auto flex flex-col justify-center items-center'>
            <h3
                className='text-center font-bold text-xl cursor-default'>
                {name}
            </h3>
            <div className='relative h-full flex text-center'>
                <Image src={image} alt={`Image ${name}`} />
                <p
                    className={`absolute top-0 w-full text-center cursor-help hover:bg-white/85 duration-500 ${isClickedDetails && 'h-full animate-[detailsmsgDown_.7s_ease-in-out]'}`}
                    onClick={handleDetailClick}
                >
                    {isClickedDetails ? details : `${details.substring(0, 15)}...`}
                </p>
            </div>
            <div className='w-full flex justify-between items-center text-center bg-white rounded'>
                <p
                    className='font-bold pl-3'>
                    R$ {price.toFixed(2)}
                </p>
                {size && <p><strong>Tamanho: </strong>{size}</p>}
                <button
                    type='button'
                    className='font-bold bg-green-600 py-0 px-3 rounded-l-[4px] rounded-ee-[4px] duration-500 hover:text-amber-600 hover:bg-black'
                    onClick={handleAddToCart}
                    disabled={itemInCart}
                >
                    {itemInCart ? 'Já no Carrinho' : 'PEDIR'}
                </button>
            </div>
        </section>
    );
};