import '../styles/global.css';
import { Preloader, Placeholder } from 'react-preloading-screen';

function MyApp({ Component, pageProps }) {
  return (
    <Preloader>
      <Component {...pageProps} />
      <Placeholder className="preloader">
        <img src="/assets/images/preloading.gif" alt="Loading..."/>
      </Placeholder>
    </Preloader>
  )
}

export default MyApp;
