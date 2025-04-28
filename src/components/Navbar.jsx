import menuItems from '../constants/menuItems'
import './Navbar.scss'
import NavItem from './NavItem'
const Navbar = ({item}) => {
  



  return (
    <nav className="nav-bar">
    <ul className="nav-bar__nav-list">

    {
      menuItems.map((item) => ( // por cada item(alta, nosotros, contacto, inicio) tengo un recorrido.Acordate que mapa recorre cada objeto del array.Item(es cada item del array, un elemento === item)
        <NavItem item={item} key={item.id} />
      /* <li className="nav-bar__nav-item">
        <a href="/index.html" className="nav-bar__nav-link">
        Inicio
        </a>
      </li> */

      ))
    }
      </ul>
      </nav> 
  )
}

export default Navbar