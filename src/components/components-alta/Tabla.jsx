import { useContext } from 'react'
import './Tabla.scss'
import TablaFila from './TablaFila'
import ProductosContext from '../../contexts/ProductosContext'

const Tabla = () => {

const {productos} = useContext(ProductosContext)

  return (
    <table className='table'>
    <thead className='table__encabezado'>
        <tr className='table__fila'>
            <th className='table__celda table__celda--encabezado'>Nombre</th>
            <th className='table__celda table__celda--encabezado'>Precio</th>
            <th className='table__celda table__celda--encabezado'>Stock</th>
            <th className='table__celda table__celda--encabezado'>Marca</th>
            <th className='table__celda table__celda--encabezado'>Categoría</th>
            <th className='table__celda table__celda--encabezado'>Detalles</th>
            <th className='table__celda table__celda--encabezado'>Foto</th>
            <th className='table__celda table__celda--encabezado'>Envío</th>
            <th className='table__celda table__celda--encabezado'>Acciones</th>
        </tr>
    </thead>
    <tbody className='table__cuerpo'>

    {
        productos && productos.map((producto) => (

            <TablaFila  producto={producto}   key={producto.id}  />
        ))
    }

    </tbody>
    </table>
  )
}

export default Tabla