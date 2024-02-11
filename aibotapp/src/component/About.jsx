import React, { PureComponent } from 'react';

import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AboutImg from './F1.jpg';

export class About extends PureComponent {
  render() {
   
    AOS.init({
      duration: 800, // Set animation duration (in milliseconds)
      once: false, // Set to true if you want animations to display only once
      // Other configuration options can be added here
    });
 // Empty dependency array ensures it runs only once
    return (

     
    <div>
      <div className='About' data-aos="flip-up">
        About Us!

 
      
        </div>
<div className='containerAbout'>
        <div className='TextAbout' data-aos="fade-right">
          <h2>
          Welcome to Decipher AI, 
a non-profit initiative harnessing the power of ChatGPT. Our chatbot, meticulously trained on the latest data from trusted news sites and authoritative documents, serves as your indispensable tool for navigating the dynamic landscape of geopolitics. Empower your knowledge with Decipher AI and unlock the insights within the ever-evolving world. Discover the undeciphered facts that shape our global narrative.


          </h2>
       
        </div>
        <div className='AboutImg' data-aos="zoom-out">  <img src={AboutImg} alt='roboIMG'></img></div>

      

        </div>
        </div>

      
    )
  }
}

export default About
