import React from 'react'

const Footer = () => {
  return (
    <div className='footer principal'>
      <div className='footer'>
        <h1 className='footer titulos-footer'>Acerca de</h1>
        <ul className='footer lista'>
          <li className='footer enlaces'>Quienes Somos</li>
          <li className='footer enlaces'>Politicas de Privacidad</li>
          <li className='footer enlaces'>Terminos y Condiciones</li>
          <li className='footer enlaces'>Defensa al consumidor</li>
        </ul>
      </div>
      <div className='footer'>
        <h1 className='footer titulos-footer'>Ayuda</h1>
        <ul className='footer lista'>
          <li className='footer enlaces'>¿Como comprar?</li>
          <li className='footer enlaces'>¿Como devolver un producto?</li>
          <li className='footer enlaces'>Sucursales</li>
          <li className='footer enlaces'>Pagos y Promociones</li>
          <li className='footer enlaces'>Entregas</li>
          <li className='footer enlaces'>Cambios</li>
        </ul>
      </div>
      <div className='footer'>
        <h1 className='footer titulos-footer'>Redes sociales</h1>
        <ul className='lista'>
          <li className='footer enlaces'>Twitter</li>
          <li className='footer enlaces'>Facebook</li>
          <li className='footer enlaces'>Instagram</li>
        </ul>
      </div>
      <div className='footer'>
        <h1 className='footer centro'>Centro de atención al cliente</h1>
        <h3 className='footer horario'>Lunes a viernes de 9 a 17hs</h3>
        <h4 className='footer numero'>0810-777-7862</h4>
      </div>
    </div>

  )
}

export default Footer