import "./Cart.css"
import { useCart } from "../CartContext/CartContext";

const Cart = () => {
    const {carrito} = useCart();
    return (
        <div className="cart-container">
            <h2>Tu <span>Carrito</span></h2>
            { carrito.length === 0 ? (
                <p>Carro sin productos</p>

            ) : (
                <>
                <div className="cart-header">
                    <p>Producto</p>
                    <p>Precio</p>
                    <p>Cantidad</p>
                    <p>Total</p>
                    <p>Acción</p>
                </div>
                <ul className="cart-items">
                    {
                        carrito.map((producto) => {
                            return (
                                <li className="cart-item" key={producto.id}>
                                    <div className="product-info">
                                      <img src={producto.imagen || "https//via.placeholder.com/150"} alt="foto" className="product-images" /> 
                                      <span>{producto.nombre}</span> 
                                    </div>
                                    <p>{producto.precio.toFixed(2)} €</p>

                                    <div className="quantity-controls">
                                        <button className="quantity-btn">
                                            -
                                        </button>
                                        <input type="number" 
                                        className="quantity-input"
                                        readOnly
                                        value={producto.cantidad}/>
                                         <button className="quantity-btn">
                                            +
                                        </button>
                                    </div>
                                    <p>0 €</p>
                                    <button className="delete-btn">
                                    <i className="fas fa-trash"></i>
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                </>
            )

            }
        </div>
    )
}

export default Cart