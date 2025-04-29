import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../../contexts/ProductosContext'
import Swal from 'sweetalert2'

const TablaFila = ({producto}) => {
  const {eliminarProductoContext, setProductoAEditar} = useContext(ProductosContext)
  const handleEliminar = (id) => {
    Swal.fire({
      title: "Borrar este elemento?",
      text: "No podrás revertir el proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,Borrar!"
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id)
        Swal.fire({
          title: "Borrado!",
          text: "El elemento ha sido borrado",
          icon: "success"
        });
      } 
    });
  }
  const handleEditar = (producto) => {
    setProductoAEditar(producto)
  }
  return (
    <tr>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.marca}</td>
        <td>{producto.categoria}</td>
        <td>{producto.detalles}</td>
        <td>
            <img src={producto.foto} alt={producto.nombre} style={{width: '40px'}} />
        </td>
        <td>{producto.envio ? 'si' : 'no'}</td>
        <td>
            <button>Ver</button>
            <button onClick={()=> handleEditar(producto)} >Editar</button> 
            <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
        </td>
    </tr>
  )
}

export default TablaFila