import {collection, addDoc, getFirestore} from "firebase/firestore"
import {useState, useContext} from "react"
import {CartContext} from '../context/ShoppingCartProvider'
import CompraFinalizada from "./CompraFinalizada"
import { Link } from 'react-router-dom'




const SendOrder = () => {
const {carrito, finalizar } = useContext(CartContext);
const [orderId, setOrderId]= useState(null)
const [nombre, setNombre] = useState("")
const [apellido, setApellido] = useState("")
const [telefono, setTelefono] = useState("")
const [email, setEmail]= useState("")

const db = getFirestore()

const handleSubmit=(e)=>{
    e.preventDefault()
    addDoc(orderCollection, order).then(({id})=>
    setOrderId(id))
}

const order = {
    nombre,
    apellido,
    telefono, 
    email,
    items: carrito.map(data =>({id: data.id, nombre: data.nombre , precio: data.precio}))
}


  
  // <CompraFinalizada orderId={orderId} />
const orderCollection = collection(db, "orden")

  return (
    <div>
        <p className='titulo-register'>Completa tus datos para poder realizar la compra</p>
        <form className="form-register" onSubmit={handleSubmit}>
            <input className="register" required type="text" placeholder='ingrese su nombre' onChange={(e)=> setNombre(e.target.value)}/>
            <input className="register" required type="text" placeholder='ingrese su apellido' onChange={(e)=> setApellido(e.target.value)}/>
            <input className="register" required type="number" placeholder='ingrese su telefono' onChange={(e)=> setTelefono(e.target.value)}/>
            <input className="register" required type="email" placeholder='ingrese su email' onChange={(e)=> setEmail(e.target.value)} />
            <button className="boton-finalizador efecto" type='submit' onClick={()=> finalizar({orderId})}>Realizar compra</button>
            
        </form>
        <p>Numero de orden {orderId}</p>
    </div>
  )

}

export default SendOrder