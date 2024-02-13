import React, { PureComponent } from 'react'
import Frontimg from './MainLogo.png'
import './Nav.css';

export class Nav extends PureComponent {
  render() {
  
    
      return (
        <div className='navbar' id='Nav'>
          <div>  <img src={Frontimg} className="img1" alt="img" /></div>
        <div>
          <ul>
            <li className='active'>
              <a href='#Nav'>Home</a>
            </li>
            <li>
              <a href='#About'>About</a>
            </li>
            <li>
              <a href='#Contribute'>Contribute</a>
            </li>
          </ul>
          </div>
        </div>
      )
    }
  }

export default Nav
