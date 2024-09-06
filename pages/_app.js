import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return <>
  <ToastContainer
  position="top-center"
  className="text-[12px]"
  autoClose={2000}
/>
  <Component {...pageProps} />
  </>
  
}
