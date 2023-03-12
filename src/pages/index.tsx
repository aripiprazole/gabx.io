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
import {userAgent} from 'next/server';
import Head from 'next/head';

import Root from '~/Root';
import Footer from '~/Footer';
import Articles from '~/Articles';
import Projects from '~/Projects';

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

export const getServerSideProps: GetServerSideProps = async ({req}) => {
  const {device} = userAgent({
    headers: new Headers(req.headers as Record<string, string>),
  });

  return {
    props: {
      isMobile: device.type !== 'desktop',
    },
  };
};

export default Home;
