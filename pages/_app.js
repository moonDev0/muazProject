import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return <>
  <ToastContainer
  position="top-center"
  className="text-[12px]"
  autoClose={2000}
/>
<QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  </>
  
}
