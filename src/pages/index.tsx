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

import styled from 'styled-components';
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

const ABOUT_ME = 'My name is Gabrielle and I am a 17-year-old ' +
  'software engineer with a passion for functional programming ' +
  'and the Kotlin programming language. In my free time, I enjoy ' +
  'playing Minecraft and working on projects related to compilers. ' +
  'I am excited to share my skills and experience with others in the field.';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Hi, I&apos;m Gabi! </title>
        <meta name="description" content="Gabrielle's blog" />
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Main>
        <h1>Hi, I&apos;m Gabi! 👋</h1>
        <p>{ABOUT_ME}</p>
        <Social>
          <li>
            <a href="https://www.instagram.com/gabrielle1guim">
              <FaInstagram size={35} />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/gabrielle-guimarães-1aa393233">
              <FaLinkedin size={35} />
            </a>
          </li>

          <li>
            <a href="https://github.com/gabrielleeg1">
              <FaGithub size={35} />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/gabrielleeg1">
              <FaTwitter size={35} />
            </a>
          </li>
        </Social>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Main = styled.main`
  width: 100%;
  max-width: 55rem;

  margin: auto;
  padding: 0 2rem;

  position: relative;
  z-index: 2;

  background: transparent;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  color: #fefefe;

  > * {
    width: 100%;
  }

  > p {
    font-size: 1.2rem;
  }

  > h1 {
    font-size: 2rem;
  }
`;

const Social = styled.ul`
  display: flex;
  gap: 2rem;

  justify-content: end;

  a {
    cursor: pointer;
    color: #fefefe;
  }
  
  a:hover {
    filter: brightness(0.8);
  }
`;

export default Home;
