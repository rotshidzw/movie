import Navbar from '../components/navbar';
import Herosection from '../components/herosection';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Herosection />
    <Component {...pageProps} />
  </>
}

export default MyApp