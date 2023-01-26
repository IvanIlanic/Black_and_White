import React from 'react'
import './Header.css'

const header = () => {
  return (
    <div id='Home' className='pf__header scale-up-center'>
        <div className='pf__header-welcome'>
            <h1>Welcome to my world <br/> of </h1>
            
            <div className='pf__header-welcome_baw'>
                <div className='pf__header-welcome_b'>BLACK</div>
                <div className='pf__header-welcome_a'>and</div>
                <div className='pf__header-welcome_w'>WHITE</div>
            </div>

        </div>
        <div className='pf__header-containers' >
            
            <div className='pf__header-containers_1'>
                <h1>Enchanted experience</h1>
                <p>Over 6 years in the bussines</p>
                <p>Done more than 120 projects</p>
                <p>Working in dinamic and urban environments</p>
                <p>Over 1200 people made happy</p>
            </div>
            <div className='pf__header-containers_1'>
                <h1>Team</h1>
                <p>3 Best friends</p>
                <p>Always in touch</p>
                <p>Courage for adventure</p>
            </div>
            <div className='pf__header-containers_1'>
                <h1>Barracks full of equipment</h1>
                <p>The best cameras, drones, stabilizations</p>
                <p>Newest editing softwares</p>
                <p>Super computers</p>
                <p>Terrain vehicles</p>

            </div>
        </div>
        
    </div>
  )
}

export default header