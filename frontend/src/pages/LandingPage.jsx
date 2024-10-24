import React from 'react'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import Signup from '../components/Signup'


function LandingPage() {
    return (
        <div id='landing-page' className='flex flex-col'>
            <NavBar />
            <Home />
           <Signup />
           
      <Footer />
        </div>
    )
}

export default LandingPage