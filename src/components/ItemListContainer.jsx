import React from "react";
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Example from './ComponenteDeEspera'
import {collection, getDocs, getFirestore} from "firebase/firestore"


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const[espera, setEspera] = useState(true)
  const { categoria } = useParams();
  const { marca } = useParams();
  const [vidriera, setVidriera] = useState([])




    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, "tecnologia");
        getDocs(itemsCollection).then((snapshot)=>{ 
        const productos = snapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
        }))
        setProductos(productos);
        setEspera(false);
      });
    }, [])

   
    
    const filtroCategorias= productos.filter((producto)=>producto.categoria===categoria)
    const filtroMarcas= productos.filter((producto)=>producto.marca==marca)
    
    useEffect(() =>{
      productos
    },)

  if (espera) {
    return <Example />
   }

   if (categoria) {
    setVidriera(filtroCategorias)
   }else if (marca) {
      setVidriera(filtroMarcas)
   }else {
    setVidriera(productos)
   }
  


return <>
      <h3 className="titulo-productos">{categoria}</h3>
      <h3 className="titulo-productos">{marca}</h3>
       {<ItemList productos={vidriera} />}
      
   
    </>
}
export default React.memo(ItemListContainer)