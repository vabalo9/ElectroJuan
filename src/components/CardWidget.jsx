import React, {useContext} from "react"
import { Link } from "react-router-dom"
import {CartContext} from '../context/ShoppingCartProvider'

const CardWidget = () => {
    const {cantidad} = useContext(CartContext);
    return <div>
        <Link to="/cart">
        <div className="boton-menu">
        <i className="bi bi-cart3"></i>
        <span className="number">{cantidad}</span>
        </div>
        </Link>
    </div>
} 

export default CardWidget