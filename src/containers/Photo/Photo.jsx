import React from 'react'
import './Photo.css'
import { images } from '../../constants'

const Photo = () => {
  return (
    <div id='Photo' className='pf__photo'>
        <div className='pf__photo-text'>
          Photo Gallery
        </div>
        <div className='pf__photo-gallery'>
          <div className='pf__photo-gallery_pic'>
            <img src={images.photo1} alt="photo1" />
            <img src={images.photo2} alt="photo2" />
            <img src={images.photo3} alt="photo3" />
            <img src={images.photo4} alt="photo4" />
            <img src={images.photo5} alt="photo5" />
          </div>
          <div className='pf__photo-gallery_pic'>
            <img src={images.photo6} alt="photo6" />
            <img src={images.photo7} alt="photo7" />
            <img src={images.photo8} alt="photo8" />
            <img src={images.photo9} alt="photo9" />
            <img src={images.photo10} alt="photo10" />
          </div>
          <div className='pf__photo-gallery_pic'>
            <img src={images.photo10} alt="photo10" />
            <img src={images.photo11} alt="photo11" />
            <img src={images.photo12} alt="photo12" />
            <img src={images.photo13} alt="photo13" />
            <img src={images.photo14} alt="photo14" />
            <img src={images.photo15} alt="photo15" />
            <img src={images.photo16} alt="photo16" />
          </div>
        </div>
    </div>
  )
}

export default Photo