
import './Navbar.css'
import { images } from '../../constants';
import{RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import React,{useState} from 'react'

const Menu = () => (

    <>
    <p><a href="#Home">Home</a></p>
    <p><a href="#Video">Video</a></p>
    <p><a href="#Photo">Photo</a></p>
    <p><a href="#Contact">Contact</a></p>
    </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <body>
      
   
      <div className="pf__navbar scale-up-center">
        <div className="pf__navbar-links scale-up-center">
          <div className="pf__navbar-links_logo">
            <img src={images.logo} alt="logo" />
          </div>
          <div className="pf__navbar-links_container ">
            <Menu/>
          </div>
        </div>
        <div className="pf__navbar-menu">
         {toggleMenu
           ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
         {toggleMenu && (
         <div className="pf__navbar-menu_container scale-up-center">
           <div className="pf__navbar-menu_container-links scale-up-center ">
             <Menu/>
           </div>
         </div>
         )}
       </div>
     </div>
    </body>
   );
 };


export default Navbar;