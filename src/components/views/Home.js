import * as React from 'react'
import {Link} from 'react-router-dom'
import Details from '../partials/Details'
import Hero from '../partials/Hero'

function Home() {
    
    return (
        <div className=" mx-auto ">
  
            
            <Hero/>
            <Details/>

        </div>
    )
}

export default Home