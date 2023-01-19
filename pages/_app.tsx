import { AppProps } from 'next/app';
import { useState } from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState,
} from 'react-query';
import '../styles/globals.css';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
