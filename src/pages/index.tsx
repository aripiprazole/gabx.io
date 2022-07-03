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

      <Waves>
        <div className='shape' />

        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          {/* eslint-disable-next-line max-len */}
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>

          {/* eslint-disable-next-line max-len */}
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>

          {/* eslint-disable-next-line max-len */}
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </Waves>

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

const Container = styled.div`
  position: relative;
`;

const Waves = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  line-height: 0;
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 144px;
  }
  
  .shape {
    height: 32rem;
    background: #4842f5;
  }
  
  .shape-fill {
    fill: #4842f5;
  }
`;

const Main = styled.main`
  width: 45rem;
  margin: auto;
  
  padding: 8rem 1rem;
  
  position: relative;
  z-index: 2;
  
  background: transparent;
  
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
      color: #f3f3f3;
      font-size: 1.025rem;
      
      text-transform: uppercase;
      
      display: flex;
      padding: 0.2rem;
      border-radius: 4.125rem;
      background: #4842f5;
      
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
