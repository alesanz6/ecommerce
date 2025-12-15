import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/home"
import Navbar from "./components/Navbar/Navbar"
import DetailsProduct from "./components/DetailsProduct/DetailsProduct"
import { CartProvider } from "./components/CartContext/CartContext"
import Cart from "./components/Cart/Cart"
import { useState } from "react"
import Search from "./components/Search/Search"

function App() {

  const [buscarTermino, setBuscarTermino] = useState();
  const handleBuscar = (termino) => {
    setBuscarTermino(termino.toLoweCase())
  }

  return (
    <>
    <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element ={ <Home  buscarTermino = {buscarTermino}/>}/>
      <Route path="/producto/:id" element ={ <DetailsProduct/>}/>
      <Route path="/carrito" element ={ <Cart/>}/>
      <Route path="/search" element ={ <Search onSearch = {handleBuscar}/>}/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App
