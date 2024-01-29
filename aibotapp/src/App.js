import React from 'react'
// import './App.css';
import Navbar from './component/navbar';
import Logo from './component/logo';
// import Bot from './component/bot';



import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
    <>
     
      <ChakraProvider>
 
        <Navbar />
        <Logo />
    


      
     <div>     
 <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
 <script src="https://mediafiles.botpress.cloud/b7c68d32-2147-411e-99ee-7934ec9fbf1d/webchat/config.js" defer></script>

 </div>  
   
      </ChakraProvider>
     
      </>
      
     
  )
}

export default App;


