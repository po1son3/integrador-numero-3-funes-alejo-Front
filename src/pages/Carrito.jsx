import ListadoCarrito from "../components/ListadoCarrito"
import useTitulo from "../hooks/useTitulo"

const Carrito = () => {
useTitulo('Carrito')


  return (
    <>
    <h1>Producto en el carrito</h1>
    <hr />
    <ListadoCarrito />
    </>
  )
}

export default Carrito