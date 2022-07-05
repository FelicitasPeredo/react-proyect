import { serverTimestamp, setDoc, collection, doc, updateDoc, increment } from 'firebase/firestore';
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartListContainer from './CartListContainer';
import EmptyCart from './EmptyCart';
import db from '../utils/firebaseConfig';
import swal from 'sweetalert';

function Cart() {
    const global = useContext(CartContext);

    // limpio el carrito
    const deleteList = () => {
        global.deleteCartList()
    }

    const createOrder = () => {
        // creo un nuevo array de items para incluir en las ordenes
        const itemsForDB = global.cartList.map(item => ({
            id: item.idCartItem,
            price: item.costCartItem,
            title: item.nameCartItem,
            qty: item.qtyCartItem
        }))

        // creo las ordenes que voy a settear en la base de datos
        let order = {
            buyer: {
                email: "leomessi@gmail.com",
                name: "Leo Messi",
                phone: "1144001711"
            },
            date: serverTimestamp(),
            total: global.calcTotal(),
            items: itemsForDB
        }

        // seteo la orden en firestore
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order)
            return newOrderRef
        }

        // si logra setearla ok salta el alert
        createOrderInFirestore()
            .then(result => swal("Thank you!", "Order received. Your ID Order is " + result.id, "success"))
            .catch(err => console.log(err))

        // actualizo el stock de el producto en la base de datos
        global.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idCartItem)
            await updateDoc(itemRef, {
                stock: increment(-item.qtyCartItem)
            })
        })

        // limpio el carrito
        deleteList()
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
                    global.cartList.length > 0 && <button class="btn btn-secondary m-5" onClick={createOrder}>Checkout Now</button>
                }
            </div>
        </div>
        {
           // Si el array esta vacio seria que el carrito esta vacio
            global.cartList.length === 0 
            ? <EmptyCart></EmptyCart> 
           : <CartListContainer></CartListContainer>
        }
    </div>
  )
}

export default Cart