import CardWidget from "./CardWidget";
import { Link } from 'react-router-dom'



const NavBar = () => {

    

    return (
        <div className="navbar">
            <Link to={`/`}>
            <h1 className="logo">TecnoJuan</h1>
            </Link>
            <ul className="nav-items">
            <Link to={`/categoria/${"Smartphones"}`}>
                <li className="items">Smartphones</li>
            </Link>
            <Link to={`/categoria/${"Notebooks"}`}>
                <li className="items">Notebooks</li>
            </Link> 
            <Link to={`/categoria/${"Watches"}`}> 
                <li className="items">Watches</li>
            </Link> 

            </ul>
             <CardWidget /> 
        </div>
        
    )
};

export default NavBar;