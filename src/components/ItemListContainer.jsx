import React from "react";
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Example from './ComponenteDeEspera'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const[espera, setEspera] = useState(true)
  const [titulo, setTitulo] =useState("")
  const { categoria } = useParams();
  const { marca } = useParams();



    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = categoria 
        ? query(collection(db, "tecnologia"), where('categoria','==',categoria)) 
        : marca 
        ? query(collection(db, "tecnologia"), where('marca','==',marca))
        : query(collection(db, "tecnologia"), where('oferta', '==', true))
        marca ? setTitulo(`Estos son nuestros productos de ${marca}`) : setTitulo(categoria)
        getDocs(itemsCollection).then((snapshot)=>{ 
        const productos = snapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
        }))
        setProductos(productos);
        setEspera(false);
      });
    }, [categoria, marca])


    
    

  if (espera) {
    return <Example />
   }

 

return <>
      <h3 className="titulo-productos">{titulo}</h3>
      
        <ItemList productos={productos} />
      
   
    </>
}
export default React.memo(ItemListContainer)