import CardWidget from "./CardWidget";

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="logo">TecnoJuan</h1>
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