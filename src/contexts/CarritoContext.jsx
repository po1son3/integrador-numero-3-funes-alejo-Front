import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const CarritoContext = createContext()
const CarritoProvider = ({children}) => {

const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito] = useLocalStorage('carrito', [])

const agregarProductoAlCarritoContext = (producto) => { // recibe producto
console.log('Ya estoy en el agregar del contexto', producto)
}

const data = {
    agregarProductoAlCarritoContext,
}
return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
export {CarritoProvider}
export default CarritoContext