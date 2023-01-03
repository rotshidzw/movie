import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import Feature from '../components/feature';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
   
    <Component {...pageProps} />
  </>
}

export default MyApp