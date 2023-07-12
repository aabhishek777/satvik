import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SocialMedia from '../components/SocialMedia'

const Homepage = () => {
    return (
    
      <>
        <div className="row  c-gradient">
          <div className="col-11 mt-2" style={{textAlign: 'center'}}>
            <span style={{ textAlign: 'center', color:'white' , fontSize:'1.4rem'}}>Are you ready for <b>Supreme 2.0 - </b></span>
            <button type="button" class="btn btn-light h1">3 Days Left</button>
          </div>
          <div className="col-1 mt-2">cut icon<i class="fa-thin fa-xmark-large"></i></div>
        </div>


        <div className="" >

          <Header />
          <Hero/>
        </div>

        <SocialMedia/>
          
           </>
 
  )
}

export default Homepage