import { CartContext } from './CartContext'
import React, { useContext } from 'react'

function CartShow({ id, picture, title, price, qty }) {
    const global = useContext(CartContext)

    const removeCard = () => {
        global.removeItem(id)
    }
  
    return (
    <div class="card w-96 h-96 bg-base-100 shadow-xl m-5">
        <div class="card-body px-7 pb-7 pt-5">
            <button class="btn btn-circle btn-outline place-self-end" onClick={removeCard}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 class="card-title">{title}</h2>
            <p>{qty} unidades</p>
            <p>${price}</p>
        </div>
        <figure><img src={picture} alt="Producto" class="object-center"/></figure>
    </div>
  )
}

export default CartShow