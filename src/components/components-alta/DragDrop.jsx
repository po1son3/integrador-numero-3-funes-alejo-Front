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

const handleFiles = (files) => {
    const file = files[0]
    uploadFile(file)
    previewFile(file)
}

const uploadFile = (file) => {
    console.log('Llegó a upload', file)
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