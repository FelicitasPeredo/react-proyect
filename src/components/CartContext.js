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

    // calculo el total de cada producto
    const calcTotalPerItem = (idItem) => {
        // Uso la misma funcion para cada item entonces tengo que identificar el item x su id, 
        // ver donde esta posicionado dentro del array de listCart y multiplicar su costo x su cantidad 
        let index = cartList.map(item => item.idItem).indexOf(idItem)
        // (cant * precio)
        return cartList[index].costCartItem * cartList[index].qtyCartItem
    }

    // calculo el subtotal
    const calcSubTotal = () => {
        // Creo un array con todos los totales por producto (cant * precio)
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        // sumo todos los valores del array con un metodo reduce
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    // calculo el total
    const calcTotal = () => {
        return calcSubTotal();
    }

    // calculo el total de las cantidades seleccionadas de productos
    const calcItemsQty = () => {
        // Creo un array con todos las cantidades por producto
        let qtys = cartList.map(item => item.qtyItem);
        // sumo todos los valores del array con un metodo reduce
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        // A value le paso un objeto con una variable y las funciones que quiera exportar a otros componentes
        <CartContext.Provider value={{cartList, AddToCart, removeItem, deleteCartList, calcTotalPerItem, calcSubTotal, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;