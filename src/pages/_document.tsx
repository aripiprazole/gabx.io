import React from 'react';
import {Head, Html, Main, NextScript} from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
};

export default Document;
