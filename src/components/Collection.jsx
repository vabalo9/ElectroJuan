import { useEffect, useState } from "react"
import {collection, getDocs, getFirestore} from "firebase/firestore"

const Collection = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection= collection(db, "tecnologia")
        getDocs(itemsCollection).then((snapshot)=>{ 
        const docs = snapshot.docs.map((doc)=>doc.data())})
        console.log(docs)
        setProducts(docs)
    },[])
  return (
    <div>Collection</div>
  )
}

export default Collection