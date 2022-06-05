import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    // seteo un estado para la lista de productos del carrito
    const [cartList, setCartList] = useState([])

    // agrego el producto a la lista del carrito, saco una copia de lo que ya existe en cartList y agrego el item
    const AddToCart = (item, qty) => {
        // almaceno en found el elemento del carrito que tenga el mismo id que el item que quiero agregar
        let found = cartList.find(el => el.idCartItem === item.id)

        // si ya existe en el carrito ese item sumo esa cantidad a la ya existente, 
        // sino suma el item al carrito
        if (found) { found.qtyCartItem += qty} else setCartList([...cartList, 
            {
                idCartItem: item.id,
                imgCartItem: item.image,
                nameCartItem: item.name,
                costCartItem: item.cost,
                qtyCartItem: qty,
            }
        ])
    }

    // quitar el producto con id = id con un filter
    const removeItem = (id) => {
        // filtro del array de prod del carrito todos los que tengan id distinto al que quiero eliminar
        // seteo ese nuevo array filtrado como carrito
        const result = cartList.filter(el => el.idCartItem !== id)
        setCartList(result)
    }

    // quitar todos los productos del carrito
    const deleteCartList = () => {
        setCartList([])
    }

    return(
        // A value le paso un objeto con una variable y las funciones que quiera exportar a otros componentes
        <CartContext.Provider value={{cartList, AddToCart, removeItem, deleteCartList}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;