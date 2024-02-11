import React, { PureComponent,  } from 'react';
import './Front.css';
import Img2 from './pikachu.png';
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
        <div>
      
          <div className='Frontdiv'>
      
              <img src={Img2} alt='img2' className='img2'></img>
             
        
        </div>
        
        <div className='WelcomeText'>
<h2>Decode, Analyze, Decipher!!</h2>
        </div>
        </div>

            
    )
  }
}

export default Front
