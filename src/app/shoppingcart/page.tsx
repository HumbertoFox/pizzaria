'use client';
import Link from "next/link";
import { Edit, Minus, Plus, Trash2 } from "react-feather";

const CLASS_DIV_BUTTONS = 'flex gap-16 py-10';
const CLASS_BUTTONS = 'font-sans text-sm font-bold bg-amber-500 px-2.5 py-1.5 rounded hover:bg-green-600 duration-700 hover:text-white';

export default function ShoppingCartPage() {
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
                    <tr key={''}>
                        <td></td>
                        <td><Edit aria-label={`Editar observação:`} /></td>
                        <td>
                            <button type='button' title='Decrementar quantidade' aria-label='Decrementar quantidade'><Minus /></button>
                            <button type='button' title='Incrementar quantidade' aria-label='Incrementar quantidade'><Plus /></button>
                        </td>
                        <td></td>
                        <td>
                            <button type='button' title='Excluir' aria-label={`Excluir`}><Trash2 /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={CLASS_DIV_BUTTONS}>
                <Link href={'/'} title='Continuar Comprando' className={CLASS_BUTTONS}>Continuar Comprando</Link>
                <button title='Finalizar Pedido' type='button' className={CLASS_BUTTONS}>Finalizar Pedido</button>
            </div>
        </section>
    );
};