import { createContext, useEffect, useState } from "react";
import { peticionesHttp } from "../helpers/peticiones-http";
import { API_PRODUCTOS_URL } from "../config/apiConfig";

const ProductosContext = createContext()

const ProductosProvider = ({children}) => { // aca va el contenido, recibe children
const [productos, setProductos] = useState(null) // esto está null porque productos hasta ahora por defecto está vacío.

const [productoAEditar, setProductoAEditar] = useState(null)
useEffect(() => {
    getAllProductos()


}, [])
//! TODOS LOS PRODS
const getAllProductos = async () => {
    try {
        const prods =  await peticionesHttp(API_PRODUCTOS_URL) // hace una peticion a la url, cuando llegue algo lo guarda en prods
        setProductos(prods) // sirve para llenar productos con el array de json server, hace que se llene productos
    } catch (error) {
        console.error('[gettAllProductos]', error)
    }
}
//! CREAR PRODUCTO
const crearProductoContext = async (productoNuevo) => {// recibe producto nuevo
    try {
    delete productoNuevo.id
    const options = {
        method: 'POST',
        headers:{'content-type': 'application/json'},
        body: JSON.stringify(productoNuevo) // espera un string
    }

    const prods = await peticionesHttp(API_PRODUCTOS_URL, options)
    console.log(prods)
    const nuevoEstadoProductos = [...productos, prods]
    setProductos(nuevoEstadoProductos)
    } catch (error) {
    console.error('[crearProductoContext]',error)
    }
}





const actualizarProductoContext = async (productoAEditar) => {
console.log('Producto a editar:', productoAEditar);
console.log('URL a actualizar:', url + productoAEditar.id);
console.log('Body enviado:', JSON.stringify(productoAEditar));

console.log(productoAEditar)
try {
    const options = {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(productoAEditar)
    }
    const urlActualizar = `${API_PRODUCTOS_URL}/${productoAEditar.id}`
     const productoEditado = await peticionesHttp(urlActualizar, options)
     console.log(productoEditado)
     const nuevoEstadoProductos = productos.map(prod => prod.id === productoEditado.id ? productoEditado : prod)
     setProductos(nuevoEstadoProductos)
    } catch (error) {
        console.error('[actualizarProductoContext]', error)
    }

}




const eliminarProductoContext = async (id) => {
    try {
        const urlEliminacion = `${API_PRODUCTOS_URL}/${id}`
        const options = {
            method: 'DELETE',
        }
        const prodEliminado = await peticionesHttp(urlEliminacion, options)
        console.log(prodEliminado)
        const nuevoEstadoProductos = productos.filter(prod => prod.id !== id ) // hace que al borrar se vean en pantalla lo que se borra(form)
        setProductos(nuevoEstadoProductos)
    } catch (error) {
        console.error('[eliminarProductoContext]', error)

    }
}



    const data = { // recibe todos los props, para sacar para afuera tengo que ponerlo acá
    productos,
    crearProductoContext,
    actualizarProductoContext,
    eliminarProductoContext,
    productoAEditar,
    setProductoAEditar
    }
return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}
export {ProductosProvider}
export default ProductosContext