import React from 'react'
import { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {
    const [cantidad, setCantidad] = useState(initial)
    const sumaCtdad = () => {
        if (cantidad < stock) setCantidad(cantidad+1); 
    }

    const restaCtdad = () => {
        if (cantidad > 0) setCantidad(cantidad-1);
    }
    
    return (
        <div class="btn-group justify-center">
            <button class="btn text-base" onClick={restaCtdad}>-</button>
            <div class="font-sans text-sm w-8 p-3 place-self-center">{cantidad}</div>
            <button class="btn text-base" onClick={sumaCtdad}>+</button>
            <div class="m-5">
                <button class="btn btn-secondary text-secondary-content" onClick={() => onAdd(cantidad)}>Add to Cart</button>
            </div>
        </div>   
    )
}

export default ItemCount