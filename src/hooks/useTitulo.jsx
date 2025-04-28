import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin título') => { // Si no le pasamos nada va a decir sin titulo.Este es el titulo de cada page/categoria (literalmente)

useEffect(() => {
document.title = `Educación It - ${textoTitulo}`

}, [])


}

export default useTitulo