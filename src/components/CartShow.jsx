import { CartContext } from './CartContext'
import React, { useContext } from 'react'

function CartShow({ id, picture, title, price, qty, description }) {
    const global = useContext(CartContext)

    const removeCard = () => {
        global.removeItem(id)
    }

  return (
  <>
    <tr>
        <td>
        <div class="flex items-center space-x-3">
            <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Producto" />
            </div>
            </div>
            <div>
            <div class="font-bold">{title}</div>
            <div class="text-sm opacity-50">{description}</div>
            </div>
        </div>
        </td>
        {
            qty === 1
            ? <td>{qty} unidad</td>
            : <td>{qty} unidades</td>
        }
        <td>${global.calcTotalPerItem(id)}</td>
        <td>
            <button class="btn btn-circle btn-outline" onClick={removeCard}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </td>
    </tr>
  </>
  )
}

export default CartShow