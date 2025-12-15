import { useCart } from "../CartContext/CartContext"
import "./Navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    const {carrito} = useCart();
    const totalProcutos = carrito.reduce((acc, producto) =>
        acc + producto.cantidad, 0)
    return (
        <section className="header">
            <h1 className="logo">Text<span>ilho</span>me</h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <div className="icons">
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
                <Link to="/carrito" className="icon-button">
                <i className="fas fa-shopping-cart"></i>
                <span className="counter">{totalProcutos}</span>
                </Link>
            </div>
        </section>
    )
}

export default Navbar