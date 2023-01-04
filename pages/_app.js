import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import Feature from '../components/feature';
import Brief from '../components/brief';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
       <Navbar />
    <Herosection />
    <Feature />
    <Brief />
    <Component {...pageProps} />
  </>
}

export default MyApp