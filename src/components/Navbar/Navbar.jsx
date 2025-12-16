import { useCart } from "../CartContext/CartContext"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
const Navbar = ({searchRef}) => {
    const {carrito} = useCart();
    const totalProcutos = carrito.reduce((acc, producto) =>
        acc + producto.cantidad, 0);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSearchClick = () => {
        if (location.pathname !== "/"){
            navigate("/");
            setTimeout(() => searchRef.current?.focus(), 100);
        }else {
            searchRef.current?.focus();
        }
        
    };
    return (
        <section className="header">
            <h1 className="logo">T-Under</h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <div className="icons">
                <button className="search-button" onClick={handleSearchClick}>
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