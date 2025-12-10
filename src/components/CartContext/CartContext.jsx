import { createContext, useContext, useState } from "react"

const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const agregarAlCarrito = (producto) => {
        setCarrito((carritoAnterior) => {
            const yaExisteElProducto = carritoAnterior.findIndex(
                (articulo) => articulo.id === producto.id
            );
            if(yaExisteElProducto >= 0) {
            const carritoActualizado = [...carritoAnterior];
            carritoActualizado[yaExisteElProducto].cantidad + 1;
            return carritoActualizado;
            } else {
                return [...carritoAnterior, {...producto, cantidad: 1}]
            }
        })
    }

    return (
        <CartContext.Provider value ={{carrito, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);