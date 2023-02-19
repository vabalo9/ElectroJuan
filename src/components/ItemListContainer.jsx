import React from "react";
import {Card, CardBody, Image, Stack, Heading, Text,   Divider, Button, ButtonGroup,  CardFooter } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
    return <>
    <div className="container">
        {greeting}
        <span className="logo2">&nbsp;TecnoJuan</span>
    </div>
    <h3 className="titulo-productos">Nuestros productos mas comprados</h3>
    <div className="container-products">

    <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP779/SP779-iphone-xs.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className="card-heading" size='md'>iPhone XS</Heading>
            <Text className="card-text">
            La pantalla del iPhone XS tiene esquinas redondeadas que siguen el elegante diseño
            curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. 
            Si se mide en forma de un rectángulo estándar, la pantalla tiene 5.85 pulgadas en diagonal (el área real de visualización es menor).
            </Text>
            <Text className="card-price" fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' className="card-button">
              Comprar ahora
            </Button>
            <Button variant='ghost' className="card-button2">
              Añadir al carrito 
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://www.infobae.com/new-resizer/b0JEuB5b83vV9SbA4kpJU2Y0_vs=/992x661/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/257HDRPTN5E4BNMDQLBGQBNXDQ.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className="card-heading" size='md'>MacBook Pro</Heading>
            <Text className="card-text">
            Gracias al nuevo chip M2, el MacBook Pro de 13 pulgadas es más
            poderoso que nunca. Ofrece hasta 20 horas de batería y un
            sistema de enfriamiento activo que mantiene un rendimiento
            increíble en el mismo diseño compacto de siempre.
            Con su espectacular pantalla Retina, cámara FaceTime HD
            y micrófonos con calidad de estudio, es nuestro
            laptop pro más portátil.
            </Text>
            <Text className="card-price" fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' className="card-button">
              Comprar ahora
            </Button>
            <Button variant='ghost' className="card-button2">
              Añadir al carrito 
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

      <Card maxW='sm'>
        <CardBody>
          <Image
            src='https://www.infobae.com/new-resizer/I8vdqgGMQKccpNeMbBtEwqrl3n4=/992x614/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/436KLOUJFBBBDEOKEIG3NMOPVI.jpg'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading className="card-heading" size='md'> Apple Watch Serie 8</Heading>
            <Text className="card-text">
            El Apple Watch Serie 8 es tu compañero ideal es aún más poderoso. Viene con un sensor de temperatura que
             ofrece información detallada sobre la salud de la mujer.
             1 Detección de Choques para que recibas asistencia ante una emergencia.
             2 Fases del Sueño que te ayuda a comprender tus hábitos al dormir. 
             Y nuevas opciones para estar en forma con la mejorada app Entrenamiento. Un futuro más saludable está a la vista.
            </Text>
            <Text className="card-price" fontSize='2xl'>
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' className="card-button">
              Comprar ahora
            </Button>
            <Button variant='ghost' className="card-button2">
              Añadir al carrito 
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>

  
    </div>

    </>
}
export default ItemListContainer