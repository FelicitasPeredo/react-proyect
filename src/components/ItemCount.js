import React from 'react'
import { useState } from 'react'

function ItemCount({stock, initial}) {
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
            <div class="font-sans text-sm w-8 place-self-center">{cantidad}</div>
            <button class="btn text-base" onClick={sumaCtdad}>+</button>
        </div>
    )
}

export default ItemCount
