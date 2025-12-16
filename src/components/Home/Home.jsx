import { useState } from "react"
import ProductList from "../ProductList/ProductList"
import Search from "../Search/Search"

const Home = ({buscarTermino, searchRef}) => {
    const [buscarTerminoLocal, setBuscarTerminoLocal] = useState("");
    const handleBuscar = (termino) => {
        setBuscarTerminoLocal(termino)
    }
    return (
        <>
        <Search onSearch ={handleBuscar} searchRef={searchRef}/>
        <ProductList buscarTermino = {buscarTerminoLocal || buscarTermino}/>
        </>
    )
}

export default Home