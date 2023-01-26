import React from 'react'
import './Video.css'
import { images } from '../../constants'


const Video = () => {
  return (
    
    <div id='Video' className='pf__video'>
      <div className='pf__video-text'>Video Gallery</div>
      <div className='pf__video-gallery'> 
        <video className='f' src={images.video} autoPlay loop muted/>
        <video className='s' src={images.video1} autoPlay loop muted/>
        <video className='t' src={images.video2} autoPlay loop muted/>
        <video className='fo' src={images.video3} autoPlay loop muted/>
      </div>
    </div>
  )
}

export default Video