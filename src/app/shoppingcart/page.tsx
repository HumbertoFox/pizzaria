'use client';
import { ShoppingCart } from "@/interfaces/interfaces";
import Link from "next/link";
import { Edit, Minus, Plus, Trash2 } from "react-feather";

const CLASS_DIV_BUTTONS = 'flex gap-16 py-10';
const CLASS_BUTTONS = 'font-sans text-sm font-bold bg-amber-500 px-2.5 py-1.5 rounded hover:bg-green-600 duration-700 hover:text-white';

export default function ShoppingCartPage({ detailsorder }: ShoppingCart) {
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
                            <td>{index + 1}</td>
                            <td>{details.produto}</td>
                            <td><Edit />{details.obs}</td>
                            <td><Plus /> {details.quantidade} <Minus /></td>
                            <td>{details.valor}</td>
                            <td><Trash2 /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {detailsorder && <div className={CLASS_DIV_BUTTONS}>
                <Link href={'/'} title='Continuar Comprando' className={CLASS_BUTTONS}>Continuar Comprando</Link>
                <button title='Finalizar Pedido' type='button' className={CLASS_BUTTONS}>Finalizar Pedido</button>
            </div>}
        </section>
    );
};