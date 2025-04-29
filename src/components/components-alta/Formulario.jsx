import { useContext, useEffect, useState } from 'react'
import './Formulario.scss'
import ProductosContext from '../../contexts/ProductosContext'

const Formulario = () => {
const {crearProductoContext, 
    productoAEditar, 
    setProductoAEditar, 
    actualizarProductoContext} = useContext(ProductosContext)// traigo de productosContext
    const formInicial = {
        id: null, 
        nombre: '',
        categoria: '',
        precio: '',
        stock: '',
        marca: '',
        detalles: '',
        foto: '', 
        envio: false
    }
    const [form, setForm] = useState(formInicial)
    useEffect(() => {
        productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar])
    



const handleSubmit = (e) => {

    e.preventDefault()
    if(form.id === null){
    crearProductoContext(form) // lleno la cajita form con un nuevo producto
    }else {
        actualizarProductoContext(form)
    }
}


const handleChange = (e) => {
const {type, name, checked, value} = e.target

setForm({
    ...form,
    [name]: type === 'checkbox' ? checked : value
})
}


const handleReset = () => {
setForm(formInicial)
setProductoAEditar(null)
}





return (
    <>
    <h2>Formulario de carga</h2>
    <form   onSubmit={handleSubmit}>

    <div>
        <label htmlFor="lbl-nombre">Nombre</label>
        <input 
        type="text" id="lbl-nombre" 
        name="nombre" 
        value={form.nombre} 
        onChange={handleChange}  /> 
    </div>

    <div>
        <label htmlFor="lbl-precio">Precio</label>
        <input 
        type="text" 
        id="lbl-precio" 
        name="precio" 
        value={form.precio}   
        onChange={handleChange} /> 
    </div>

    <div>
        <label htmlFor="lbl-stock">Stock</label>
        <input 
        type="text" 
        id="lbl-stock" 
        name="stock" 
        value={form.stock} 
        onChange={handleChange}/> 
    </div>
    <div>
        <label htmlFor="lbl-marca">Marca</label>
        <input 
        type="text" 
        id="lbl-marca" 
        name="marca" 
        value={form.marca} 
        onChange={handleChange}/> 
    </div>

    <div>
        <label htmlFor="lbl-categoria">Categoria</label>
        <input 
        type="text" 
        id="lbl-categoria" 
        name="categoria" 
        value={form.categoria} 
        onChange={handleChange}/> 
    </div>

    <div>
        <label htmlFor="lbl-detalle">Detalles</label>
        <input 
        type="text" 
        id="lbl-detalles" 
        name="detalles" 
        value={form.detalles} 
        onChange={handleChange}/> 
    </div>

    <div>
        <label htmlFor="lbl-foto">Foto</label>
        <input 
        type="text" 
        id="lbl-foto" 
        name="foto" 
        value={form.foto} 
        onChange={handleChange}/> 
    </div>

    <div>
        <label htmlFor="lbl-envio">Envío</label>
        <input 
        type="checkbox" 
        id="lbl-envio" 
        name="envio" 
        checked={form.envio} 
        onChange={handleChange}/> 
    </div>

    <button type="submit">Guardar : Editar</button>
    <button type="reset"onClick={handleReset}>Limpiar</button>

    </form>
    </>
)
}

export default Formulario