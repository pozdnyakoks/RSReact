import '@/styles/globals.css';
import '@/styles/Search.scss';
import '@/styles/List.scss';
import '@/styles/SearchItem.scss';
import '@/styles/ChooseCount.scss';
import '@/styles/PaginationButton.scss';
import '@/styles/ErrorButton.scss';
import '@/styles/NotFound.scss';

import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
