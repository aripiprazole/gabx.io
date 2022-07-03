import React from 'react';

import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import {FiAtSign, FiBook, FiHome, FiPackage} from 'react-icons/fi';

import styled from 'styled-components';

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Gabrielle&apos;s Blog</title>
        <meta name='description' content="Gabrielle's blog" />
        <link rel='icon' href='/public/favicon.ico' />
      </Head>

      <Main>
        <Avatar>
          <div>
            <Image
              src='/avatar.jpeg'
              alt='Gabrielle'
              width={200}
              height={200}
            />
          </div>
        </Avatar>

        <NavBar>
          <ul>
            <li>
              <Link href='#'>
                <a><FiHome size={18} /> Home</a>
              </Link>
            </li>

            <li>
              <Link href='#projects'>
                <a><FiPackage size={18} /> Projects</a>
              </Link>
            </li>

            <li>
              <Link href='#posts'>
                <a><FiBook size={18} /> Posts</a>
              </Link>
            </li>

            <li>
              <Link href='#contact'>
                <a><FiAtSign size={18} />Contact</a>
              </Link>
            </li>
          </ul>
        </NavBar>
      </Main>
    </Container>
  );
};

const Container = styled.div``;

const Main = styled.main`
  width: 45rem;
  margin: auto;
  
  padding: 1rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavBar = styled.nav`
  ul {
    display: flex;
    gap: 3rem;
    width: fit-content;
    margin: auto;
    
    a {
      text-decoration: none;
      color: #333;
      font-size: 1.025rem;
      
      text-transform: uppercase;
      
      display: flex;
      padding: 0.2rem;
      border-radius: 4.125rem;
      background: var(--background);
      
      align-items: center;
      gap: 0.3rem;
      
      :hover {
        opacity: 0.8;
      }
    }
  }
`;

const Avatar = styled.div`
  display: flex;
  
  div {
    margin: auto;
  }
  
  img {
    border-radius: 1rem;
    border: 1px solid #333 !important;
  }
`;

export default Home;
