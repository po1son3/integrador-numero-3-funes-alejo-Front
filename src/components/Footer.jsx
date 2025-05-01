import { Link } from "react-router"

const Footer = () => {
  return (
    <footer>
    <div className="lado-izquiero-lp">
    Luxury Paradise  
    </div>
    <hr />
    <div className="lado-derecho-content">
    <div className="redes-icon">
    <Link to="https://facebook.com">Facebook</Link> 
    <Link to="https://twitter.com">Twitter</Link>
    <Link to="https://instagram.com">Instagram</Link>
    </div> 
    <div className="nav-links-redirec">
    <Link to="/">Inicio</Link>
    <Link to="/alta">Alta</Link>
    <Link to="/nosotros">Nosotros</Link>
    <Link to="/contacto">Contacto</Link>
    </div>
    </div>
</footer>
)
}

export default Footer