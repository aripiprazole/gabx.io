import React from 'react';
import type {AppProps} from 'next/app';
import GlobalStyle from '~/src/styles/GlobalStyle';

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
