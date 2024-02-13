import React, { PureComponent } from 'react';
import './Footer.css';
import Logo from './MainLogo.png';


export class Footer extends PureComponent {
  render() {
    return (
       
            <footer class="footer" id='footer'>
       
     
        <img src={Logo} alt='Logo'></img>


      
        
          <p>&copy; DECIPHER_AI-BOT | All Rights Reserved</p>
          
</footer>
        
    
    )
  }
}

export default Footer
