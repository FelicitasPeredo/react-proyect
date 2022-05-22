import React from 'react'
import { useState } from 'react'

function ItemCount(props) {
    const [cantidad, setCantidad] = useState(props.initial)
    const onAdd = () => {
        if (cantidad < props.stock) setCantidad(cantidad+1); 
    }

    const onSubstract = () => {
        if (cantidad > 0) setCantidad(cantidad-1);
    }

    return (
        <div class="btn-group justify-center">
            <button class="btn text-base" onClick={onSubstract}>-</button>
            <div class="font-sans text-sm w-8 place-self-center">{cantidad}</div>
            <button class="btn text-base" onClick={onAdd}>+</button>
        </div>
    )
}

export default ItemCount