import React from 'react'

const FixedVideo = () => {
  return (
    <div className=''>
       <video   autoPlay loop muted  className="fixed -z-10 object-cover  w-full h-screen "  >
             <source   src="/video/bg.mp4"   type="video/mp4"  />
             <meta name="apple-mobile-web-app-capable" content="yes">

             </meta>
                Your browser does not support the video tag.
            </video>       
    </div>
  )
}

export default FixedVideo