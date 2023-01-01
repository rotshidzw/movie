import React from 'react'

const herosection = () => {
  return (
    <div className="rounded-xl sm:pl-[1000px] sm:mr-24 text-[#8b95a6] p-8 ">
  <div className="pt-12 align-right  space-y-2">
     <h1 className="text-[#BCEFE9] text-8xl" >Join the Game</h1>
    <blockquote>
   
      <p className="text-lg font-medium mb-6">
      I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
      Just click “Edit Text” or double click me to add your own content and make changes to the font. 
      I’m a great place for you to tell a story and let your users know a little more about you.
      </p>
    </blockquote>
    
    
    <button className="h-10 px-8 mt-6 font-normal rounded-full bg-[#BCEFE9] text-black hover:bg-[#0B1321] hover:text-teal-50 hover:border-solid hover:border-2 hover:border-white" type="submit">
         Explore
        </button>
     
   
  </div>
</div>
  )
}

export default herosection

