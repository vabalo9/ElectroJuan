import {collection, addDoc, getFirestore} from "firebase/firestore"
import {useState, useContext} from "react"
import {CartContext} from '../context/ShoppingCartProvider'
import CompraFinalizada from "./CompraFinalizada"




const SendOrder = () => {
const {carrito, compraFinalizada } = useContext(CartContext);
const [orderId, setOrderId]= useState(false)
const [nombre, setNombre] = useState("")
const [apellido, setApellido] = useState("")
const [telefono, setTelefono] = useState("")
const [email, setEmail]= useState("")

const db = getFirestore()

const handleSubmit=(e)=>{
    e.preventDefault()
    addDoc(orderCollection, order)
    .then(({id})=> setOrderId(id))
    .then(() => compraFinalizada())
}

const order = {
    nombre,
    apellido,
    telefono, 
    email,
    items: carrito.map(data =>({id: data.id, nombre: data.nombre , precio: data.precio}))
}


  

const orderCollection = collection(db, "orden")

  return (
    <div>
{!orderId ? <>
        <p className='titulo-register'>Completa tus datos para poder realizar la compra</p>
        <form className="form-register" onSubmit={handleSubmit}>
            <input className="register" required type="text" placeholder='ingrese su nombre' onChange={(e)=> setNombre(e.target.value)}/>
            <input className="register" required type="text" placeholder='ingrese su apellido' onChange={(e)=> setApellido(e.target.value)}/>
            <input className="register" required type="number" placeholder='ingrese su telefono' onChange={(e)=> setTelefono(e.target.value)}/>
            <input className="register" required type="email" placeholder='ingrese su email' onChange={(e)=> setEmail(e.target.value)} />
            <input className="register" required type="email" placeholder='ingrese su email nuevamente'/>
            <button className="boton-finalizador efecto" type='submit' >Realizar compra</button>
            
        </form>
</>
:<CompraFinalizada orderId={orderId}
  carrito={carrito} />}
        
    </div>
  
  )}



export default SendOrder