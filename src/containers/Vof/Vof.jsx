import React from 'react'
import { images } from '../../constants'
import './Vof.css'


const Vof = () => {
  return (
    <div className='pf__vof'>
        <div className='pf__vof-container'>
            <div className='pf__vof-container_video'>
            
              <video src={images.video} autoPlay loop muted/>
              <a href="#Video">Videography</a>
            </div>
            <div className='pf__vof-container_photo'>
              <a href="#Photo">Photography</a>
            </div>
        </div>
    </div>
  )
}

export default Vof