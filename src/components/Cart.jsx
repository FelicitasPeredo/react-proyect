import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartListContainer from './CartListContainer';
import EmptyCart from './EmptyCart';
// import CartShow from './CartShow';

function Cart() {
    const global = useContext(CartContext);

    const deleteList = () => {
        global.deleteCartList()
    }

  return (
    <div class='container'>
        <div class="navbar bg-base-100 justify-between">
            <p class="footer-title m-5">Shopping Cart</p>
            <div>
                {
                    global.cartList.length > 0 && <button class="btn btn-outline m-5" onClick={deleteList}>Delete All Items</button>
                }
            </div>
            <div class="navbar-end">
                {
                global.cartList.length > 0 && <button class="btn btn-primary m-5">Checkout</button>
                }
            </div>
        </div>
        {
           // Si el array esta vacio seria que el carrito esta vacio
            global.cartList.length === 0 
            ? <EmptyCart></EmptyCart> 
           : <CartListContainer></CartListContainer>
        //    global.cartList.map(item => <CartShow key={item.idCartItem} id={item.idCartItem} title={item.nameCartItem} price={item.costCartItem} picture={item.imgCartItem} qty={item.qtyCartItem} description={item.descriptionCartItem}/>)
        }
    </div>
  )
}

export default Cart