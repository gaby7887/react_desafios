import "./NavBar.css";
import img from './Imagenes/carrito.png';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <ul>
                <li>Home</li>
                <li>Galeria</li>
                <li>Contacto</li>
            </ul>
            <div>
                <img className='logoCarrito' src={img} alt='logo' />
            </div>
        </nav>
    )
}

export default NavBar