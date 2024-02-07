import React, { PureComponent, useEffect } from 'react';
import './Front.css';
import Img2 from './img1.png';
// import Aos from 'aos';
// import 'aos/dist/aos.css';


// function Animation() {
//   useEffect(() => {
//     Aos.init();
//   },[]
//   )
// }

export class Front extends PureComponent {
  render() {
      return (
      
          <div className='Frontdiv'>
      
              <img src={Img2} alt='img2' className='img2'></img>
             
        
              </div>
            
    )
  }
}

export default Front
