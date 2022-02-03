import "./NavBar.css";
import CartWidget from "../CardWiget/CartWidget";

const NavBar = () => {
    return (
        
        <nav className="NavBar">
            <ul>
                <li>Home</li>
                <li>Galeria</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
        
    );
};

export default NavBar;