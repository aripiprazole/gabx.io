import React from 'react';

import type {NextPage} from 'next';
import Head from 'next/head';

import styled from 'styled-components';

const Container = styled.div``;

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Gabrielle&apos; Blog</title>
        <meta name="description" content="Gabrielle's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello, world!</h1>
    </Container>
  );
};

export default Home;
