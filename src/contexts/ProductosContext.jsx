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

    const data = { // recibe todos los props
    productos
    }
return <ProductosContext.Provider value={data}> {children} </ProductosContext.Provider>
}
export {ProductosProvider}
export default ProductosContext