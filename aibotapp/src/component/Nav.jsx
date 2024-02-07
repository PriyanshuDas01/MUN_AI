import React, { PureComponent } from 'react'
import Frontimg from './logo1.png'
import './Nav.css';

export class Nav extends PureComponent {
  render() {
    return (
      <div className='navbar'>
        <img src={Frontimg} className="img1" alt="img" />
      </div>
    )
  }
}

export default Nav
