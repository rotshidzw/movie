import React from 'react';
import Image from 'next/image';
import Mountain from '../images/background09.jpg';
import card from '../images/card1.jpg';
import Secard  from '../images/card2.jpg';
import thcard  from '../images/card3.jpg';
import Mountains from '../images/background05.gif';

const cards = () => {
  return (<div className="bg-[url('https://static.wixstatic.com/media/84770f_0656c318634b498b8add6715889e2922~mv2.jpg/v1/fill/w_1237,h_1208,fp_0.62_0.56,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0656c318634b498b8add6715889e2922~mv2.jpg')] md:pt-14 bg-no-repeat bg-fixedCD  bg-cover bg-fill">
<h2 className="text-4xl font-bold pt-9 text-center text-cyan-200">more games</h2>
    
    
    
    <div class="p-28  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      
   
     
        <div class="rounded-lg  overflow-hidden h-34 shadow-2xl shadow-[#0B1321] opacity-100">
       <div className="relative  pt-8 pb-12 pl-8 border-solid border-1 pr-12 rounded-lg">  <Image class="w-[80px] rounded-xl border-solid border-4  top-[150px] left-[150px] h-[80px] absolute" src={card} alt="Mountain">
        </Image> <div class=" text-xl mb-2 text-center top-[290px] left-[110px] h-[80px] absolute"><span className="text-3xl font-bold">The Unknown

</span><br/><span className="text-xl">RPG</span>
</div>  
         <Image class="w-full    rounded-lg" src={card} alt="Mountain">
        </Image>
        </div>
      
      <div class="px-6 py-4">
        
        <p class="text-gray-400 font-light  text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 xl:px-24 left-24 pt-4 pb-2">
     <button className="h-10 px-8 mt-6 font-normal rounded-full bg-[#BCEFE9] text-black hover:bg-[#0B1321] hover:text-teal-50 hover:border-solid hover:border-2 hover:border-white" type="submit">
          Play Now
        </button></div>
    </div>
    
    <div class=" rounded-lg  overflow-hidden h-34 shadow-2xl shadow-[#0B1321] opacity-100">
    <div className=" relative  pt-8 pb-12 pl-8 border-solid border-1 pr-12 rounded-lg">  <Image class="w-[80px] rounded-xl border-solid border-4  top-[150px] left-[150px] h-[80px] absolute" src={Secard} alt="Mountain">
        </Image><div class=" text-xl mb-2 text-center top-[290px] left-[110px] h-[80px] absolute"><span className="text-3xl font-bold">Dragons Lair
</span><br/><span className="text-xl">Adventure</span>
</div> 
        <Image class="w-full rounded-lg" src={Secard} alt="Mountain">
        </Image>
       </div>
      <div class="px-6 py-4">
   
        <p class="text-gray-400 font-light  text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 xl:px-24 pt-4 pb-2">
      <button className="h-10 px-8 mt-6 font-normal rounded-full bg-[#BCEFE9] text-black hover:bg-[#0B1321] hover:text-teal-50 hover:border-solid hover:border-2 hover:border-white" type="submit">
          Play Now
        </button></div>
    </div>

   
    <div class="rounded-lg  overflow-hidden h-34 shadow-2xl shadow-[#0B1321] opacity-100">
    <div className="relative  pt-8 pb-12 pl-8 border-solid border-1 pr-12 rounded-lg">  <Image class="w-[80px] rounded-xl border-solid border-4 top-[150px] left-[150px] h-[80px] absolute" src={thcard} alt="Mountain">
        </Image>   <div class=" text-xl mb-2 text-center top-[290px] left-[150px] h-[80px] absolute"><span className="text-3xl font-bold">Atactic</span><br/><span className="text-xl">Strategy</span>
</div>  
        <Image class="w-full rounded-lg" src={thcard} alt="Mountain">
          
        
        </Image> 
       </div>
      <div class="px-6  py-4">
    
        <p class="text-gray-400 font-light  text-center text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 xl:px-24 pt-4 pb-2">
      <button className="h-10 px-8 mt-6 font-normal rounded-full bg-[#BCEFE9] text-black hover:bg-[#0B1321] hover:text-teal-50 hover:border-solid hover:border-2 hover:border-white" type="submit">
          Play Now
        </button>
      </div>
    </div>
  </div>
  <div className="rounded-xl hover:scroll-auto flex sm:ml-24 text-center sm:text-justify text-[#8b95a6]  sm:p2 hero">
  <div className="pt-12 align-right  space-y-2">
     <h1 className="text-[#BCEFE9] text-6xl" >About us</h1>
    <blockquote>
   
      <p className="text-lg font-medium mb-6">
      
I'm a paragraph. Click here to add your own text and edit me.<br/>
 It’s easy. Just click “Edit Text” or double click me to add your own<br/> content and make changes to the font. 
I’m a great place for you to tell<br/> a story and let your users know a little more about you.
      </p>
    </blockquote>
    
    
    <button className="h-10 px-8 mt-6 font-normal rounded-full bg-[#BCEFE9] text-black hover:bg-[#0B1321] hover:text-teal-50 hover:border-solid hover:border-2 hover:border-white" type="submit">
         Learn More
        </button>  
  </div>
  </div>
  </div>

  )
}

export default cards