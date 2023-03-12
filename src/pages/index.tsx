/*
 * My personal blog and portfolio website
 * Copyright (C) 2022  Gabrielle Guimarães
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';

import type {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head';

import Root from '~/ui/Root';
import Footer from '~/ui/Footer';
import Articles from '~/ui/Articles';
import Projects from '~/ui/Projects';

import {ABOUT_ME} from '~/utils/constants';

type Props = {
  isMobile: boolean;
};

const Home: NextPage<Props> = ({isMobile}) => {
  return (
    <Root isMobile={isMobile}>
      <Head>
        <title>Hi, I&apos;m Gabi! </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hi, I&apos;m Gabi! 👋</h1>
      <p>{ABOUT_ME}</p>
      <Projects />
      <Articles />
      <Footer />
    </Root>
  );
};

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const {viewport} = query;

  return {
    props: {
      isMobile: viewport !== 'desktop',
    },
  };
};

export default Home;
