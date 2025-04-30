import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { peticionesHttp } from '../helpers/peticiones-http'


const CarritoContext = createContext()
const CarritoProvider = ({children}) => {
const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO
const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] = useLocalStorage('carrito', [])

function elProductoEstaEnElCarrito(producto) {
    const nuevoArray = carrito.filter(prod => prod.id === producto.id)
    return nuevoArray.length
}
function obtenerProductoDeCarrito(producto) {
    return carrito.find(prod => prod.id === producto.id)
}

const agregarProductoAlCarritoContext = (producto) => { // recibe producto
console.log('Ya estoy en el agregar del contexto', producto)

if(!elProductoEstaEnElCarrito(producto)) {
    console.log('No está en el carrito')
    producto.cantidad = 1 
    agregarAlCarrito(producto)
}else {
    console.log('Ya está en el carrito')
    const productoDeCarrito = obtenerProductoDeCarrito(producto)
    console.log(productoDeCarrito)
    productoDeCarrito.cantidad++
    window.localStorage.setItem('carrito', JSON.stringify(carrito) )
}
}

const eliminarProductoDelCarritoContext = (id) => {
eliminarDelCarrito(id)
}
const limpiarCarritoContext = () => {
    console.log('Limpiando Carrito...')
    limpiarCarrito()
}

const guardarCarritoBackendContext = async () => {
    try {
        console.log('Llegó al contexto la señal de guardado')
        console.log(carrito)
const options = {
    method: 'POST',
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify(carrito)
}
    const carritoGuardado = await peticionesHttp(urlCarrito, options)
    console.log(carritoGuardado)
    limpiarCarrito()
    } catch (error) {
        console.error('[guardarCarritoBackendContext]',error)
    }
}








const data = {
    agregarProductoAlCarritoContext,
    carrito,
    eliminarProductoDelCarritoContext,
    limpiarCarritoContext,
    guardarCarritoBackendContext
}
return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}
export {CarritoProvider}
export default CarritoContext