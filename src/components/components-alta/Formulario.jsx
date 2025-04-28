import { useState } from 'react'
import './Formulario.scss'

const Formulario = () => {

    const formInicial = {
        id: null, 
        nombre: '',
        categoria: '',
        precio: '',
        stock: '',
        detalle: '',
        foto: '', 
        envio: false
    }
const [form, setForm] = useState(formInicial)

const handleSubmit = () => {

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
        <label htmlFor="lbl-categoria">Categoria</label>
        <input 
        type="text" 
        id="lbl-categoria" 
        name="categoria" 
        value={form.categoria} 
        onChange={handleChange}/> 
    </div>

    <div>
        <label htmlFor="lbl-detalle">Detalle</label>
        <input 
        type="text" 
        id="lbl-detalle" 
        name="detalle" 
        value={form.detalle} 
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