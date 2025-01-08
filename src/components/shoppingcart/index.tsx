'use client';

import {
    useEffect,
    useState
} from 'react';
import { ShoppingCartItemsProps } from '@/interfaces/interfaces';
import {
    Edit,
    Minus,
    Plus,
    Trash2
} from 'react-feather';
import Image from 'next/image';

const CLASS_SECTION = 'absolute top-0 z-10 backdrop-blur-xl bg-white/70 w-full min-h-full flex flex-col items-center duration-500 animate-[detailsmsgDown_.7s_ease-in-out] px-7 md:px-0';
const CLASS_DIV_BUTTONS = 'flex gap-16 py-10';
const CLASS_BUTTONS = 'font-sans text-sm font-bold bg-amber-600 px-2.5 py-1.5 rounded hover:bg-green-600 duration-700 hover:text-white';

export default function ShoppingCartComponents({
    detailsorder,
    onClickedShopping,
    onUpdateTotal,
    onRemoveItem
}: ShoppingCartItemsProps) {
    const [items, setItems] = useState(detailsorder);
    const [totalAmount, setTotalAmount] = useState<number>(0);

    useEffect(() => {
        setItems(detailsorder);
    }, [detailsorder]);

    useEffect(() => {
        const calculateTotal = () => {
            return items.reduce((total, item) => total + item.price * item.quantity, 0);
        };

        const total = calculateTotal();
        setTotalAmount(total);
        onUpdateTotal(total);
    }, [items, onUpdateTotal]);

    const handleShoppingClick = () => onClickedShopping(false);

    const handleRemoveItem = (index: number) => {
        if (onRemoveItem) {
            onRemoveItem(index);
        };
    };

    const handleIncrement = (index: number) => {
        const newItems = [...items];
        newItems[index].quantity += 1;
        setItems(newItems);
    };

    const handleDecrement = (index: number) => {
        const newItems = [...items];
        if (newItems[index].quantity > 1) {
            newItems[index].quantity -= 1;
            setItems(newItems);
        }
    };

    if (!detailsorder || detailsorder.length === 0) {
        return (
            <section className={CLASS_SECTION}>
                <h1 className='font-bold text-2xl pt-10'>Meu Carrinho</h1>
                <p className='text-center py-10 font-sans font-bold'>Seu carrinho está vazio</p>
                <button
                    className={CLASS_BUTTONS}
                    title='Continuar Comprando'
                    type='button'
                    onClick={handleShoppingClick}>
                    Continuar Comprando
                </button>
            </section>
        );
    };
    return (
        <section className={CLASS_SECTION}>
            <h1 className='font-bold text-2xl pt-10'>Meu Carrinho</h1>
            <div className={CLASS_DIV_BUTTONS}>
                <button
                    className={CLASS_BUTTONS}
                    title='Continuar Comprando'
                    type='button'
                    onClick={handleShoppingClick}
                >
                    Continuar Comprando
                </button>
                <button
                    className={CLASS_BUTTONS}
                    title='Finalizar Pedido'
                    type='button'
                >
                    Finalizar Pedido
                </button>
            </div>
            <table className='w-full text-xs sm:text-base'>
                <thead>
                    <tr className='flex cursor-default'>
                        <th className='w-[40%]'>Produto</th>
                        <th className='w-[15%]'>Obs.</th>
                        <th className='w-[15%]'>Quantidade</th>
                        <th className='w-[15%]'>Valor</th>
                        <th className='w-[15%]'>Excluir</th>
                    </tr>
                </thead>
                <tbody className='flex flex-col'>
                    {detailsorder?.map((details, index) => (
                        <tr key={index} className='flex items-center pb-3'>
                            <td className='w-[40%] flex items-center gap-1 font-bold text-xs text-center'>
                                <p className='p-2'>{index + 1}</p>
                                <Image
                                    className='w-32'
                                    src={details.image}
                                    alt={`Image ${details.name}`}
                                />
                                <div className='hidden sm:flex flex-col'>
                                    <p>{details.name}</p>
                                    <p className='text-xs font-normal'>{details.details}</p>
                                </div>
                            </td>
                            <td className='w-[15%] text-center'>
                                <button
                                    type='button'
                                    title='Observação'>
                                    <Edit className='sm:w-[15px] duration-500' />
                                </button>
                            </td>
                            <td className='w-[15%] flex justify-center items-center gap-2'>
                                <button
                                    type='button'
                                    title='Decrementar quantidade'
                                    aria-label='Decrementar quantidade'
                                    onClick={() => handleDecrement(index)}
                                    className='hover:text-amber-600 duration-500'
                                >
                                    <Minus className='sm:w-[15px] duration-500' />
                                </button>
                                <span className='px-3 cursor-default sm:px-1'>{details.quantity}</span>
                                <button
                                    type='button'
                                    title='Incrementar quantidade'
                                    aria-label='Incrementar quantidade'
                                    onClick={() => handleIncrement(index)}
                                    className='hover:text-green-600 duration-500'
                                >
                                    <Plus className='sm:w-[15px] duration-500' />
                                </button>
                            </td>
                            <td className='w-[15%] flex justify-center'><span>R$ </span>{(details.price * details.quantity).toFixed(2)}</td>
                            <td className='w-[15%] flex'>
                                <button
                                    className='mx-auto'
                                    type='button'
                                    title={`Excluir ${details.name}`}
                                    aria-label={`Excluir ${details.name}`}
                                    onClick={() => handleRemoveItem(index)}>
                                    <Trash2 className='sm:w-[15px] duration-500' />
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
            {detailsorder.length > 2 && (
                <div className={CLASS_DIV_BUTTONS}>
                    <button
                        className={CLASS_BUTTONS}
                        title='Continuar Comprando'
                        type='button'
                        onClick={handleShoppingClick}
                    >
                        Continuar Comprando
                    </button>
                    <button
                        className={CLASS_BUTTONS}
                        title='Finalizar Pedido'
                        type='button'
                    >
                        Finalizar Pedido
                    </button>
                </div>
            )}
        </section>
    );
}