import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/home"
import Navbar from "./components/Navbar/Navbar"
import DetailsProduct from "./components/DetailsProduct/DetailsProduct"
import { CartProvider } from "./components/CartContext/CartContext"
import Cart from "./components/Cart/Cart"
import { useRef, useState } from "react"
import Search from "./components/Search/Search"

function App() {

  const [buscarTermino, setBuscarTermino] = useState();
  const handleBuscar = (termino) => {
    setBuscarTermino(termino.toLowerCase())
  }
  const searchRef = useRef(null);

  return (
    <>
    <CartProvider>
    <Router>
      <Navbar searchRef={searchRef}/>
      <Routes>
      <Route path="/" element ={ <Home  buscarTermino = {buscarTermino} searchRef={searchRef}/>}/>
      <Route path="/producto/:id" element ={ <DetailsProduct/>}/>
      <Route path="/carrito" element ={ <Cart />}/>
      <Route path="/search" element ={ <Search onSearch = {handleBuscar} searchRef={searchRef}/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App
