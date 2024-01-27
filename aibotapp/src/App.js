import React from 'react'
// import './App.css';
import Navbar from './component/navbar';
import Logo from './component/logo';


import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
    <>
     
      <ChakraProvider>
 
        <Navbar />
        <Logo />
   
   
   
      </ChakraProvider>
      </>
      
     
  )
}

export default App;


