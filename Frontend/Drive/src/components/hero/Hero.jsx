import React from 'react'
import Sidebar from '../../pages/Sidebar'
import Main from '../../pages/Main'

const Hero = () => {
  return (
    <>
         <div className="main flex">
                <Sidebar/>
                <Main/>
           </div>
    </>
  )
}

export default Hero