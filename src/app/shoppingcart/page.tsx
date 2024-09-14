'use client';
import Link from "next/link";
import { ShoppingCartItems } from "@/interfaces/interfaces";
import { Edit, Minus, Plus, Trash2 } from "react-feather";

const CLASS_DIV_BUTTONS = 'flex gap-16 py-10';
const CLASS_BUTTONS = 'font-sans text-sm font-bold bg-amber-500 px-2.5 py-1.5 rounded hover:bg-green-600 duration-700 hover:text-white';
const CLASS_SECTION = 'w-full flex flex-col items-center animate-[detailsmsgDown_.7s_ease-in-out] cursor-default';

export default function ShoppingCartPage({ detailsorder }: ShoppingCartItems) {
    if (!detailsorder || detailsorder.length === 0) {

        return (
            <section className={CLASS_SECTION}>
                <h1 className='font-bold text-2xl pt-10'>Meu Carrinho</h1>
                <p className='mt-4 pb-10 cursor-default'>Seu carrinho está vazio. Adicione itens para continuar.</p>
                <Link href={'/'} title='Voltar à loja' className={CLASS_BUTTONS}>Voltar à loja</Link>
            </section>
        );
    };

    return (
        <section className={CLASS_SECTION}>
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
                            <td><Edit aria-label={`Editar observação: ${details.obs}`} />
                                {details.obs}
                            </td>
                            <td>
                                <button type='button' title='Decrementar quantidade' aria-label='Decrementar quantidade'><Minus /></button>
                                {details.quantidade}
                                <button type='button' title='Incrementar quantidade' aria-label='Incrementar quantidade'><Plus /></button>
                            </td>
                            <td>{details.valor}</td>
                            <td>
                                <button type='button' title={`Excluir ${details.produto}`}>
                                    <Trash2 aria-label={`Excluir ${details.produto}`} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {detailsorder.length > 5 && <div className={CLASS_DIV_BUTTONS}>
                <Link href={'/'} title='Continuar Comprando' className={CLASS_BUTTONS}>Continuar Comprando</Link>
                <button title='Finalizar Pedido' type='button' className={CLASS_BUTTONS}>Finalizar Pedido</button>
            </div>}
        </section>
    );
};