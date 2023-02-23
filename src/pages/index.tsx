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

import type {NextPage} from 'next';
import Head from 'next/head';

import Root from '~/Root';
import Social from '~/Social';
import Work from '~/Work';

import {ABOUT_ME} from '~/utils/constants';

import styles from '~/styles/pages/index.module.scss';

const Home: NextPage = () => {
  return (
    <Root>
      <Head>
        <title>Hi, I&apos;m Gabi! </title>
        <meta name="description" content="Gabrielle's blog" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Hi, I&apos;m Gabi! 👋</h1>
      <p>{ABOUT_ME}</p>
      <Work />
      <Social />
    </Root>
  );
};

export default Home;
