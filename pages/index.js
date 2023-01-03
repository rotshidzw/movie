import { Inter } from '@next/font/google';
import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import Feature from '../components/feature';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
    <Herosection />
    <Feature />
    </>
  )
}
