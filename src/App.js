import React from 'react'
import './App.css'
import {Navbar,Footer,Contact} from './components'
import {Header,Vof,Photo,Video} from './containers'

const App = () => {
  return (
    <div className='App'>
        <div className='cover__main '>
            <Navbar/>
            <Header/>
            <Vof/>
            <Video/>
            <Photo/>
            <Contact/>
            <Footer/>
        </div>
         
    </div>
  )
}

export default App