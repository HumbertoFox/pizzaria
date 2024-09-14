'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCartItems } from '@/interfaces/interfaces';
import { Edit, Minus, Plus, Trash2 } from 'react-feather';

const CLASS_DIV_BUTTONS = 'flex gap-16 py-10';
const CLASS_BUTTONS = 'font-sans text-sm font-bold bg-amber-500 px-2.5 py-1.5 rounded hover:bg-green-600 duration-700 hover:text-white';

export default function ShoppingCartComponents({ detailsorder }: ShoppingCartItems) {
    return (
        <section className='w-full flex flex-col items-center animate-[detailsmsgDown_.7s_ease-in-out]'>
            <h1 className='font-bold text-2xl pt-10'>Meu Carrinho</h1>
            <div className={CLASS_DIV_BUTTONS}>
                <Link href={'/'} title='Continuar Comprando' className={CLASS_BUTTONS}>Continuar Comprando</Link>
                <button title='Finalizar Pedido' type='button' className={CLASS_BUTTONS}>Finalizar Pedido</button>
            </div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>{''}</th>
                        <th className='w-3/4'>Produto</th>
                        <th>Obs.</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {detailsorder?.map((details, index) => (
                        <tr key={index}>
                            {index + 1}
                            <td>
                                <Image src={details.image}
                                    alt={`Image ${details.name}`}
                                />
                            </td>
                            <td>{details.name}</td>
                            <td>
                                <Edit aria-label={`Editar observação: ${details.details}`} />
                                {details.details}
                            </td>
                            <td>
                                <button
                                    type='button'
                                    title='Decrementar quantidade'
                                    aria-label='Decrementar quantidade'>
                                    <Minus />
                                </button>
                                {details.size}
                                <button
                                    type='button'
                                    title='Incrementar quantidade'
                                    aria-label='Incrementar quantidade'>
                                    <Plus />
                                </button>
                            </td>
                            <td>{details.price.toFixed(2)}</td>
                            <td>
                                <button
                                    type='button'
                                    title={`Excluir ${details.name}`}
                                    aria-label={`Excluir ${details.name}`}
                                >
                                    <Trash2 />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={CLASS_DIV_BUTTONS}>
                <Link href={'/'} title='Continuar Comprando' className={CLASS_BUTTONS}>Continuar Comprando</Link>
                <button title='Finalizar Pedido' type='button' className={CLASS_BUTTONS}>Finalizar Pedido</button>
            </div>
        </section>
    );
};