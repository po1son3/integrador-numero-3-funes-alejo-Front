import { Link } from "react-router"
import './Footer.scss'
const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__lado-izquierdo-lp">
    Luxury Paradise  
    </div>
    <hr className="footer__divider"/>
    <div className="footer__lado-derecho-content">
    <div className="footer__redes-icon">
    <Link className="link" to="https://facebook.com">Facebook</Link> 
    <Link className="link" to="https://twitter.com">Twitter</Link>
    <Link className="link" to="https://instagram.com">Instagram</Link>
    </div> 
    <div className="footer__nav-links-redirec">
    <Link className="link" to="/">Inicio</Link>
    <Link className="link"to="/alta">Alta</Link>
    <Link className="link"to="/nosotros">Nosotros</Link>
    <Link className="link"to="/contacto">Contacto</Link>
    </div>
    </div>
</footer>
)
}

export default Footer