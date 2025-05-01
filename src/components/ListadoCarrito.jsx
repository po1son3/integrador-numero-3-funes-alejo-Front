import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"
import ItemCarrito from "./ItemCarrito"
import './ListadoCarrito.scss'

const ListadoCarrito = () => {

    const { carrito, limpiarCarritoContext, guardarCarritoBackendContext, calcularTotalProductos, calcularTotalProductosCarritos} = useContext(CarritoContext)
    

    const handleComprar = () => {
        console.log('Comprando...')
        guardarCarritoBackendContext()
    }
    
    const handleLimpiarCarrito = () => {
        console.log('Vaciando carrito...')
        limpiarCarritoContext()
    }

    const precioTotal = calcularTotalProductos()
    const totalDeProductos = calcularTotalProductosCarritos()
return (
    <>
    <table className='tabla-carrito'>
        <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {
                carrito.length <= 0 ? (
                    <tr>
                        <td colSpan={5} style={{textAlign: 'center'}}>No hay productos</td>
                    </tr>
                ) : (
                    carrito.map((producto, idx) => (
                        <ItemCarrito key={idx} producto={producto} />
                    ))
                )
            }
        </tbody>
        <tfoot>
            <tr>
            <td colSpan="5">Total:</td>
            <td>{precioTotal}</td>
            </tr>
            <tr>
            <td colSpan="5">Total de Carrito:</td>
            <td>{totalDeProductos}</td>
            </tr>
        </tfoot>
    </table>
    { !carrito.length <= 0 && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <div style={{ display: 'inline-flex', gap: '1rem' }}>
        <button onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
        <button onClick={handleComprar}>Comprar</button>
        </div>
        </div>
        )
    }
    
</>
)
}

export default ListadoCarrito