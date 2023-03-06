import React from "react"
import { Link } from "react-router-dom"

const CardWidget = () => {
    return <div>
        <Link to="/cart">
        <div className="boton-menu">
        <i className="bi bi-cart3"></i>
        <span className="number">5</span>
        </div>
        </Link>
    </div>
} 

export default CardWidget