import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import Example from './ComponenteDeEspera'
import {collection, getDocs, getFirestore} from "firebase/firestore"


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([])
  const[espera, setEspera] = useState(true)


  useEffect(() =>{
    const db = getFirestore();
    const itemsCollection = collection(db, "tecnologia");
    getDocs(itemsCollection).then((snapshot)=>{ 
    const productos = snapshot.docs.map((doc)=>({
    ...doc.data(),
    id: doc.id,
    }))
    setProductos(productos.find((prod) => prod.id == id));
    setEspera(false);
  });
}, [])

useEffect(() =>{
  productos
});

  
   if (espera) {
    return <Example />
   }

  return (
    <>
    <ItemDetail
    key={productos.id}
    id={productos.id}
    nombre={productos.nombre}
    descripcion={productos.descripcion}
    imagen={productos.imagen}
    precio={productos.precio}
    stock={productos.stock}
    />
    </>
  )
}


export default React.memo(ItemDetailContainer)