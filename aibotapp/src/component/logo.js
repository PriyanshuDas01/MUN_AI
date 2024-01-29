import React from 'react'
import {  Image } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'



export default function logo() {
  return (
      // <center>
      <Container maxW='95vw' bg='purple.600' color='white' borderRadius={20} >
    

      {/* <div> */}
      
              <Image
                  zIndex={1}
  borderRadius='30vh'
                boxSize='45vh'
           
             
              marginTop= '1vw'
              marginLeft='32vw' 
             paddingTop='2vw'
              paddingBottom='5vw'
    
  src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              
      />
      
      {/* </div> */}
      
      <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/b7c68d32-2147-411e-99ee-7934ec9fbf1d/webchat/config.js" defer></script>
              

          </Container>
    //   </center>
  

  )
}
