import React, { PureComponent } from 'react'
import HowImg from './HowImg.png';
import './HowToUse.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export class HowUse extends PureComponent {
  render() {
    AOS.init({
      duration: 800, // Set animation duration (in milliseconds)
      once: false, // Set to true if you want animations to display only once
     
    });
    return (
      <div className='HowContainer'>
            <div className='HowHeading' data-aos="flip-up">
                How TO Use
            </div>
        <div className='HowComponents'>
        <div className='HowImg' data-aos="zoom-out">
                <img src={HowImg} alt='HowToUse'></img>
                </div>
          <div className='HowText'data-aos="fade-right">
            <ol type='num'>
              <li>TO use the ai-bot <b>click</b> on the chat icon.</li> 
              <li>Say <b>“HI”</b> to start the conversation and select a resource from where you want to fetch info.</li>
              <li>Now type your question and get instant verified results.</li>
              <li>
              you will be provided with the <b>source links</b> of the generated info based on your selected news library.
              </li>
              <li>    Now Explore and get help form <b>Chatgpt + Internet</b> to unleash your limits.</li>



          
</ol>

          </div>
        
            

            </div>
      </div>
    )
  }
}
export default HowUse

