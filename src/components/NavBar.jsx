import CardWidget from "./CardWidget";
import {Menu, MenuButton, Portal, MenuList, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const NavBar = () => {

    

    return (
         <div className="navbar">

             <Link to={`/`}>
             <h1 className="logo">TecnoJuan</h1>
             </Link>
        <div>
            <Menu>
              <MenuButton className="categorias">Categorias</MenuButton>
              <Portal>
                <MenuList>
                  <MenuItem>
                    <Link to={`/categoria/${"Smartphones"}`}>
                        <li className="items">Smartphones</li>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/categoria/${"Notebooks"}`}>
                        <li className="items">Notebooks</li>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/categoria/${"Watches"}`}> 
                        <li className="items">Watches</li>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>

            <Menu>
              <MenuButton className="categorias">Marcas</MenuButton>
              <Portal>
                <MenuList>
                  <MenuItem>
                    <Link to={`/marca/${"apple"}`}>
                        <li className="items">Apple</li>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to={`/marca/${"samsung"}`}>
                        <li className="items">Samsung</li>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
            </div>
             
              <CardWidget /> 
        </div>
        
    )
};

export default NavBar;