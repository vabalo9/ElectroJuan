import CardWidget from "./CardWidget";
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to={`/`}>
            <h1 className="logo">TecnoJuan</h1>
            </Link>
            <ul className="nav-items">
                <li className="items">Tablets</li>
                <li className="items">Celulares</li>
                <li className="items">Notebooks</li>
                <li className="items">Pcs</li>
            </ul>
             <CardWidget /> 
        </div>
        
    )
};

export default NavBar;