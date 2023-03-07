import {Card, CardBody, Image, Stack, Heading, Text, Divider, Button, ButtonGroup,  CardFooter } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({id, imagen, descripcion, precio, nombre}) => { 
  return (
    <>
    <Card key={id} maxW='sm'>
      <CardBody>
        <Image
          src={imagen}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading className="card-heading" size='md'>{nombre}</Heading>
          <Text className="card-text">
          {descripcion}
          </Text>
          <Text className="card-price" fontSize='2xl'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' className="card-button">
            <Link to={`/product/${id}`}>Ver mas detalles</Link>
          </Button>
          <Button variant='ghost' className="card-button2">
            Añadir al carrito 
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    




    
    </>
  )
}

export default Item