import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'
const Nosotros = () => {
  useTitulo('Nosotros')
  return (
  <main>
  <img 
    src="/public/imgs/luxury-paradise.webp" 
    alt="tienda de ropa" 
    className="imagen-centrada"
  />
  <p className="parrafo-arreglado">
    Nosotros somos Luxury Paradise, una empresa que no solo se fija en que vistas bien, sino también en la calidad de nuestros productos y la experiencia.
  </p>
</main>
  )
}

export default Nosotros