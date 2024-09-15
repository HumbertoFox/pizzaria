'use client';
import { useEffect, useState } from 'react';
import { ShoppingCartItemsProps } from '@/interfaces/interfaces';
import { Edit, Minus, Plus, Trash2 } from 'react-feather';
import Image from 'next/image';

const CLASS_SECTION = 'absolute top-[130px] z-50 backdrop-blur-xl bg-white/70 w-full min-h-full flex flex-col items-center duration-500 animate-[detailsmsgDown_.7s_ease-in-out] sm:top-[94px] md:px-7';
const CLASS_DIV_BUTTONS = 'flex gap-16 py-10';
const CLASS_BUTTONS = 'font-sans text-sm font-bold bg-amber-500 px-2.5 py-1.5 rounded hover:bg-green-600 duration-700 hover:text-white';

export default function ShoppingCartComponents({ detailsorder, onClickedShopping, onUpdateTotal, onRemoveItem }: ShoppingCartItemsProps) {
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            return detailsorder.reduce((total, item) => total + item.price, 0);
        };

        const total = calculateTotal();
        setTotalAmount(total);
        onUpdateTotal(total);
    }, [detailsorder, onUpdateTotal]);

    const handleShoppingClick = () => {
        onClickedShopping(false);
    };

    const handleRemoveItem = (index: number) => {
        if (onRemoveItem) {
            onRemoveItem(index);
        };
    };

    if (!detailsorder || detailsorder.length === 0) {
        return (
            <section className={CLASS_SECTION}>
                <h1 className='font-bold text-2xl pt-10'>Meu Carrinho</h1>
                <p className='text-center py-10 font-sans font-bold'>Seu carrinho está vazio</p>
                <button title='Continuar Comprando' type='button' className={CLASS_BUTTONS} onClick={handleShoppingClick}>Continuar Comprando</button>
            </section>
        );
    };

    return (
        <section className={CLASS_SECTION}>
            <h1 className='font-bold text-2xl pt-10'>Meu Carrinho</h1>
            <div className={CLASS_DIV_BUTTONS}>
                <button title='Continuar Comprando' type='button' className={CLASS_BUTTONS} onClick={handleShoppingClick}>Continuar Comprando</button>
                <button title='Finalizar Pedido' type='button' className={CLASS_BUTTONS}>Finalizar Pedido</button>
            </div>
            <table className='w-full'>
                <thead>
                    <tr className='flex'>
                        <th>{''}</th>
                        <th>{''}</th>
                        <th className='w-[40%]'>Produto</th>
                        <th className='w-[13%]'>Obs.</th>
                        <th className='w-[18%]'>Quantidade</th>
                        <th className='w-[14%]'>Valor</th>
                        <th className='w-[15%]'>Excluir</th>
                    </tr>
                </thead>
                <tbody className='flex flex-col'>
                    {detailsorder?.map((details, index) => (
                        <tr key={index} className='flex items-center pb-3'>
                            <td className='w-7 font-bold text-xs text-center'>{index + 1}</td>
                            <td className='w-32'>
                                <Image src={details.image}
                                    alt={`Image ${details.name}`}
                                />
                            </td>
                            <td className='w-3/12 pl-3'>
                                {details.name}
                                <p className='text-xs'>{details.details}</p>
                            </td>
                            <td className='w-1/5 text-center'>
                                <button
                                    type='button'
                                    title='Observação'>
                                    <Edit />
                                </button>
                            </td>
                            <td className='w-[12%] flex justify-center'>
                                <button
                                    type='button'
                                    title='Decrementar quantidade'
                                    aria-label='Decrementar quantidade'>
                                    <Minus />
                                </button>
                                <span className='px-3 cursor-default'>{1}</span>
                                <button
                                    type='button'
                                    title='Incrementar quantidade'
                                    aria-label='Incrementar quantidade'>
                                    <Plus />
                                </button>
                            </td>
                            <td className='w-[20%] flex justify-center'><span>R$ </span>{details.price.toFixed(2)}</td>
                            <td className='w-[9%] flex'>
                                <button
                                    type='button'
                                    title={`Excluir ${details.name}`}
                                    aria-label={`Excluir ${details.name}`}
                                    className='mx-auto'
                                    onClick={() => handleRemoveItem(index)}>
                                    <Trash2 />
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className='flex justify-end gap-5 font-bold bg-amber-500/50 pr-[10%]'>
                            <span>
                                Subtotal:
                            </span>
                            <span className='text-blue-700'>
                                R$ {totalAmount.toFixed(2)}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            {detailsorder.length > 2 && (<div className={CLASS_DIV_BUTTONS}>
                <button title='Continuar Comprando' type='button' className={CLASS_BUTTONS} onClick={handleShoppingClick}>Continuar Comprando</button>
                <button title='Finalizar Pedido' type='button' className={CLASS_BUTTONS}>Finalizar Pedido</button>
            </div>
            )}
        </section>
    );
};