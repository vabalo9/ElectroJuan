import React from "react";
import Data from "../data.json"
import ItemList from "./ItemList";
import {useState} from "react";


const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([])

  const pedirProductos = () => {
    return new Promise((resolve) => {
      setTimeout (()=>{
        resolve(Data);

        }, 3000);
    });
  };

  pedirProductos()
    .then((res) =>{
      setProductos(res)
  })
  
    return <>
   
    <div className="container">
        {greeting}
        <span className="logo2">&nbsp;TecnoJuan</span>
    </div>
    
    <h3 className="titulo-productos">Nuestros productos mas comprados</h3>

    
      < ItemList
      productos={productos}
      />
   
    </>
}
export default ItemListContainer