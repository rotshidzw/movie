import React from 'react'
import Image from 'next/image';
import logo from '../images/background08.jpg'


function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

const feature = () => {
  return (<div className="rounded-xl hover:scroll-auto lg:pt-36 sm:ml-[200px] md:ml-[500px] md:mr-[20px] lg:mr-[20px] xl:mr-[20px] lg:ml-[600px] xl:ml-[800px]  sm:pl-[100px]  text-[#8b95a6] p-8 ">
    <h3 className="text-blue-300 text-4xl mb-6">Featured</h3>
  
    <div>
  <div className="pt-3 bg-[#0B1321] rounded-2xl align-right  space-y-2">
    <div className="pl-3  pb-4 pr-3">
    <div className="rounded-xl" viewBox="10 50 0 0"><NavLink href="/"> 
  <a >
  <video    className="rounded-xl" preload="auto" role="presentation" 
   autoPlay="auto" src="https://video.wixstatic.com/video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/480p/mp4/file.mp4" ></video>
    
  </a>
</NavLink>
</div>
    <blockquote>
         <h1 className="text-[#BCEFE9] text-3xl" >Join the Game</h1>
      <p className="text-lg font-medium mb-6">
      I'm a paragraph.
       Click here to add your own text and edit me. 
      </p>
    </blockquote>
 
    
    <button className="h-10  px-8 mt-6 font-normal rounded-full hover:bg-[#BCEFE9]  hover:text-black bg-[#0B1321] text-teal-50 border-solid border-2 border-white" type="submit">
         Play Now
        </button>
     </div>
   </div>
  </div>
</div>

  )
}

export default feature