import { useState } from 'react';
import Image from 'next/image';
import logo from '../images/background06.png'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 md:top-4  left-0 sm:pl-[690px] h-screen   transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex space-x-4 border bg-white text-black rounded-3xl items-center justify-center filter drop-shadow-md md:w-[700px] h-20"> {/*logo container*/}
                <a className="text-xl font-medium my-4" href="/">Home</a>
                 <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Games
                </a>
                <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                   Company
                </a>     
                      <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Careers
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>
            
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md  px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
            <div className="sm:w-3/12 animate-spin " viewBox="10 50 0 0"><NavLink href="/"> 
  <a>
    <Image 
    src={logo}
    width={200}
    height={200}
    alt="" />
  </a>
</NavLink>
</div>
                <a className="text-2xl font-semibold" href="/">GAMEZ</a>
            </div>
            <div className="w-9/12 flex  justify-end items-center">

                <div className="z-50 flex border rounded-lg sm:top-4 border-blue-200 bg-[#BCEFE9] relative w-14 h-12 sm:h-20 sm:w-20 flex-col justify-between items-center " onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-2 sm:h-3 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-4 md:translate-y-9" : ""}`} />
                    <span className={`h-2 sm:h-3 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-2 sm:h-3 w-full  bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-4 md:-translate-y-8" : ""}`} />
                </div>

               
            </div>
        </nav>
    )
}