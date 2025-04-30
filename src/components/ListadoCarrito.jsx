import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"

const ListadoCarrito = () => {

    const {carrito} = useContext(CarritoContext)


    console.log(carrito)
return (
    <div>ListadoCarrito</div>
)
}

export default ListadoCarrito