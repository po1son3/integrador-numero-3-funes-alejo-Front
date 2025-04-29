import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";

const ProductosContext = createContext()

const ProductosProvider = ({children}) => { // aca va el contenido, recibe children
const url = import.meta.env.VITE_BACKEND_PRODUCTOS
const [productos, setProductos] = useState(null) // esto está null porque productos hasta ahora por defecto está vacío.
useEffect(() => {
    getAllProductos()


}, [])

const getAllProductos = async () => {
    try {
        const prods =  await peticionesHttp(url, {}) // hace una peticion a la url, cuando llegue algo lo guarda en prods
        setProductos(prods) // sirve para llenar productos con el array de json server, hace que se llene productos
    } catch (error) {
        console.error('[gettAllProductos]', error)
    }
}

const crearProductoContext = async (productoNuevo) => {// recibe producto nuevo
    try {
    delete productoNuevo.id
    const options = {
        method: 'POST',
        header:{'content-type': 'application/json'},
        body: JSON.stringify(productoNuevo) // espera un string
    }

    const prods = await peticionesHttp(url, options)
    console.log(prods)
    const nuevoEstadoProductos = [...productos, prods]
    setProductos(nuevoEstadoProductos)
    } catch (error) {
    console.error('[crearProductoContext]',error)
    }
}
const actualizarProductoContext = (productoAEditar) => {

}
const eliminarProductoContext = async (id) => {
    try {
        const urlEliminacion = url + id
        const options = {
            method: 'DELETE',
        }
        const prodEliminado = await peticionesHttp(urlEliminacion, options)
        console.log(prodEliminado)
    } catch (error) {
        
    }
}



    const data = { // recibe todos los props, para sacar para afuera tengo que ponerlo acá
    productos,
    crearProductoContext,
    actualizarProductoContext,
    eliminarProductoContext
    }
return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}
export {ProductosProvider}
export default ProductosContext