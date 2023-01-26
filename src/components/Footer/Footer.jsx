import React from "react"
import './Footer.css'
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className='pf__foote '>
        <ul>
          <li><a href=""><img src={images.facebook} alt="facebook" /></a></li>
          <li><a href="https://www.instagram.com/ivan_ilanic/"><img src={images.instagram} alt="instagram" /></a></li>
          <li><a href=""><img src={images.twitter} alt="twitter" /></a></li>
          <li><a href=""><img src={images.youtube} alt="youtube" /></a></li>
        </ul>
        <div className='pf__footer-copyright'>
          <p>@All copyrights to Black and white world</p>
        </div>
    </div>
  )
}

export default Footer