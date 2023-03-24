import React from 'react'
import { Skeleton, Stack, Box, Spinner, } from '@chakra-ui/react'


    
        function Example() {
  const [isLoaded, setIsLoaded] = React.useState(false)
  return (
    <>
    <div className='skeleton'>
     <Stack padding={6} spacing={1}>
      <Skeleton height='40px' isLoaded={isLoaded}>
        <Box>Hello World!</Box>
      </Skeleton>
      <Skeleton
        height='40px'
        isLoaded={isLoaded}
        bg='green.500'
        color='white'
        fadeDuration={1}
      >
        <Box>Hello React!</Box>
      </Skeleton>
       <Skeleton
        height='40px'
        isLoaded={isLoaded}
        fadeDuration={4}
        bg='blue.500'
        color='white'
      >
        <Box>Hello ChakraUI!</Box>
      </Skeleton> 
    </Stack> 


    </div>
</>
  )
}
    
  


export default Example