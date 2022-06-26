import React from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
import CartShow from './CartShow';

function CartListContainer() {
    const global = useContext(CartContext);
    
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2 overflow-y-auto m-5'>
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th className='text-base'>Products</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    // Si el array esta vacio seria que el carrito esta vacio
                    global.cartList.length > 0 && global.cartList.map(item => <CartShow key={item.idCartItem} id={item.idCartItem} title={item.nameCartItem} price={item.costCartItem} picture={item.imgCartItem} qty={item.qtyCartItem} description={item.descriptionCartItem}/>)
                }
                </tbody>
            </table>
        </div>
        <div class="m-6">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                <tr>
                    <th className='text-base'>Order Summary</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {/* <!-- row 1 --> */}
                <tr>
                    <td>Subtotal</td>
                    <td>${global.calcSubTotal()}</td>
                </tr>
                {/* <!-- row 2 --> */}
                <tr>
                    <td>Taxes</td>
                    <td>${global.calcTaxes()}</td>
                </tr>
                {/* <!-- row 3 --> */}
                <tr>
                    <td>Taxes Discount</td>
                    <td>${-global.calcTaxes()}</td>
                </tr>
                </tbody>
                <tfoot>
                    {/* <!-- row 4 --> */}
                    <tr>
                        <th className='text-base'>Total</th>
                        <th className='text-base'>${global.calcTotal()}</th>
                    </tr>
                </tfoot>
            </table> 
        </div>
    </div>
  )
}

export default CartListContainer