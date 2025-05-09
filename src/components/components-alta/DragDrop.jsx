import { peticionesHttp } from '../../helpers/peticiones-http'
import './DragDrop.scss'

const DragDrop = ({setFoto, srcImagenBack, setSrcImagenBack}) => {

    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']
    arrayEventosDragDrop.forEach(eventName => {
    document.body.addEventListener(eventName, e => e.preventDefault())
    })

const handleDrop = (e) => {// con este handle la idea es detener el comportamiento de la imágen por defecto.
    const files = e.dataTransfer.files
    handleFiles(files)
}

const handleFiles = async (files) => {
    const file = files[0]
    await uploadFile(file)
    previewFile(file)
}

const uploadFile = async (file) => {
    const url = import.meta.env.VITE_BACKEND_UPLOAD
    console.log('Llegó a upload', file)

    try {
        const formData = new FormData()

        formData.append('imagen', file)

        const options = {
            method: 'POST',
            body: formData
        }
        const imagenUp = await peticionesHttp(url, options)
        console.log(imagenUp)
    } catch (error) {
        console.log('[uploadFile]', error)
    }

}

const previewFile = (file) => {
    console.log('Llegó a preview', file)
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('loadend',() => {
        setSrcImagenBack(reader.result)
    })
}   

const handleChange = () => {

}

const srcImagen = ''





return (
    <div className="drop-area" onDrop={handleDrop}>
        <p>
            Subir imágen al servidor con <b>File dialog</b> o con 
            <b> drag and drop</b> dentro del área punteada
        </p>
    <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />    
    <label className="drop-area-button" htmlFor="lbl-foto">
        File dialog
    </label>

        <div className="drop-area-image">

            <img src={srcImagenBack} alt="" />

        </div>
        
    </div>
)
}

export default DragDrop