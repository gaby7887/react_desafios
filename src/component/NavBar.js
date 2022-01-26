import "./NavBar.css";
import IconoCart from "./CartWidget";

const NavBar = () => {
    return (
        
        <nav className="NavBar">
            <ul>
                <li>Home</li>
                <li>Galeria</li>
                <li>Contacto</li>
            </ul>
            <IconoCart />
        </nav>
        
    );
};

export default NavBar