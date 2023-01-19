import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import Feature from '../components/feature';
import Brief from '../components/brief';
import Card from '../components/cards';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <>
       <Navbar />
    <Herosection />
    <Feature />
    <Brief />
    <Card />
    <Component {...pageProps} />
  </>
}

export default MyApp