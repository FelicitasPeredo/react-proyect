import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className='h-80 grid grid-cols-3 justify-items-center items-center m-4'>
        <div className='col-span-3 text-5xl font-bold'>The cart is empty</div>
        <div className='col-span-3'>
            <Link to='/'><button class="btn btn-secondary">Continue Shopping</button></Link>
        </div>
        
    </div>
  )
}

export default EmptyCart