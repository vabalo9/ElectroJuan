import { Link } from 'react-router-dom'

const CompraFinalizada = ({orderId}) => {



  

  return (
    <div>
      <h1 className='parrafo-final'>
        Muchas gracias por tu compra! <i className="bi bi-emoji-smile-fill"></i> <br></br>
        tu número de seguimiento es <span className='codigo-final'>{orderId}</span>
      </h1>

      <h4 className='parrafo-final'>para volver a la página principal  <Link className='link' to={`/`}>has click aqui</Link></h4>
      
    </div>
  )
}

export default CompraFinalizada