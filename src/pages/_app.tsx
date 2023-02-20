import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import  store  from './../redux/store';

import Navbar from '@/navigation/navbar'
import Footer from '@/navigation/footer';

export default function App({ Component, pageProps }: AppProps) {

  return <>
  
  <Navbar />
 <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  <Footer/>
  </>
}
