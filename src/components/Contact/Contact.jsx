import React from "react";
import './Contact.css'

const Contact = () => {
  
  return (
    
      <div id="Contact" className='pf__contact'>
          <form >
              <h1>GET IN TOUCH</h1>
              <input type="text" id='name' placeholder='Your Name' required />
              <input type="email" id='email' placeholder='Email id' required />
              <input type="text" id='phone' placeholder='Phone No.' required />
              <textarea id="message" rows="4" placeholder='How can we help you?'></textarea>
              <button  type="submit" value='Send'>Send</button>
          </form>
      </div>
   
  )
}

export default Contact