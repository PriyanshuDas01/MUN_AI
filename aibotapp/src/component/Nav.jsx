import React, { PureComponent } from 'react'
import Frontimg from './MainLogo.png'
import './Nav.css';

export class Nav extends PureComponent {
  render() {
  
    
      return (
        <div className='navbar'>
          <img src={Frontimg} className="img1" alt="img" />
          <ul>
            <li className='active'>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='$'>Contribute</a>
            </li>
          </ul>
            
        </div>
      )
    }
  }

export default Nav
