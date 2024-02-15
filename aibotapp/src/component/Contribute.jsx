import React, { PureComponent } from 'react'
import './Contribute.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export class Contribute extends PureComponent {
    render() {
        AOS.init({
            duration: 800, // Set animation duration (in milliseconds)
            once: false, // Set to true if you want animations to display only once
           
          });
    return (
        <div className='Contribute' id='Contribute'>
            <div className='ContributeHeading' data-aos="flip-up">
                Contribute
            </div>
            <div className='ContributeText' data-aos="zoom-in-up">
                <p>You can contribute your research work around any geopolitical issue which has either changed the world in the past or is shaping the current world dynamics through the contribution form. Just click on <b>“Contribute Here!”</b> and we will add your research doc in the contribution section of the Decipher-Bot. Also your profile will be added to the <b>contributors section</b> on complecting 3 verified contributions. </p>
                <br></br>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSebJ5aOHwQ-SESy9unQqQdLFZHd63vwoeycnIR9T0BB23FZHA/viewform?usp=sf_link'>
                <button>
                    Contribute Here!
                    </button>
                    </a>
           </div>
              

            
        
      </div>
    )
  }
}

export default Contribute
