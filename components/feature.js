import React from 'react'
import Image from 'next/image';
import logo from '../images/background08.jpg'


function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

const feature = () => {
  return (
    <div className="rounded-xl   sm:pl-[960px] sm:mr-24 text-[#8b95a6] p-8 ">
  <div className="pt-3 bg-[#0B1321] rounded-2xl align-right  space-y-2">
    <div className="pl-3  pb-4 pr-3">
    <div className="rounded-xl" viewBox="10 50 0 0"><NavLink href="/"> 
  <a >
  <wix-video id="videoContainer_comp-ka6o8h2p" data-video-info="{&quot;fittingType&quot;:&quot;fill&quot;,&quot;alignType&quot;:&quot;center&quot;,&quot;hasBgScrollEffect&quot;:&quot;&quot;,&quot;bgEffectName&quot;:&quot;&quot;,&quot;videoId&quot;:&quot;ea26fd_8ed7dc63397c45969e1d658cb28c5a7b&quot;,&quot;videoWidth&quot;:1920,&quot;videoHeight&quot;:1080,&quot;qualities&quot;:[{&quot;quality&quot;:&quot;480p&quot;,&quot;size&quot;:409920,&quot;url&quot;:&quot;video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/480p/mp4/file.mp4&quot;},{&quot;quality&quot;:&quot;720p&quot;,&quot;size&quot;:921600,&quot;url&quot;:&quot;video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/720p/mp4/file.mp4&quot;},{&quot;quality&quot;:&quot;1080p&quot;,&quot;size&quot;:2073600,&quot;url&quot;:&quot;video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/1080p/mp4/file.mp4&quot;}],&quot;isVideoDataExists&quot;:&quot;1&quot;,&quot;videoFormat&quot;:&quot;mp4&quot;,&quot;playbackRate&quot;:1,&quot;autoPlay&quot;:true,&quot;containerId&quot;:&quot;comp-ka6o8h2p&quot;,&quot;animatePoster&quot;:&quot;none&quot;}" class="bX9O_S bgVideo yK6aSC"><video id="comp-ka6o8h2p_video" class="K8MSra" role="presentation" crossorigin="anonymous" aria-label="" playsinline="" preload="auto" loop="" tabindex="-1" autoplay="" src="https://video.wixstatic.com/video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/480p/mp4/file.mp4" style="height: 100%; width: 100%; object-fit: cover; object-position: center center; opacity: 1;"></video><wix-image id="comp-ka6o8h2p_img" class="I5zqsT Z_wCwr Jxk_UL bgVideoposter yK6aSC" data-image-info="{&quot;containerId&quot;:&quot;comp-ka6o8h2p&quot;,&quot;targetWidth&quot;:160,&quot;targetHeight&quot;:90,&quot;alignType&quot;:&quot;center&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;imageData&quot;:{&quot;width&quot;:1920,&quot;height&quot;:1080,&quot;uri&quot;:&quot;ea26fd_8ed7dc63397c45969e1d658cb28c5a7bf000.jpg&quot;,&quot;displayMode&quot;:&quot;fill&quot;,&quot;quality&quot;:{&quot;unsharpMask&quot;:{&quot;radius&quot;:0.33,&quot;amount&quot;:1,&quot;threshold&quot;:0}},&quot;devicePixelRatio&quot;:1}}" data-has-bg-scroll-effect="" data-bg-effect-name="" data-has-ssr-src="" data-src="https://static.wixstatic.com/media/ea26fd_8ed7dc63397c45969e1d658cb28c5a7bf000.jpg/v1/fill/w_324,h_173,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/ea26fd_8ed7dc63397c45969e1d658cb28c5a7bf000.jpg" style="opacity: 0;"><img alt="" style="width: 324px; height: 173px; object-fit: cover;" src="https://static.wixstatic.com/media/ea26fd_8ed7dc63397c45969e1d658cb28c5a7bf000.jpg/v1/fill/w_324,h_173,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/ea26fd_8ed7dc63397c45969e1d658cb28c5a7bf000.jpg"></wix-image></wix-video>
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

  )
}

export default feature