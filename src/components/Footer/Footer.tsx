import React from 'react';

import {Container, Content, Main, Column} from './Footer.styles';
import {FiGithub, FiInstagram, FiTwitch, FiTwitter} from 'react-icons/fi';

const Footer = () => {
  return (
    <Container>
      <Content>
        <Main>
          <h2>Gabrielle Guimarães</h2>

          <span className='copyright'>
            © 2022-present Gabrielle Guimarães. All Rights Reserved
          </span>
        </Main>

        <Column>
          <h3>Social</h3>

          <ul>
            <li>
              <a href='https://twitter.com/gabrielleeg1'>
                <FiTwitter /> Twitter
              </a>
            </li>

            <li>
              <a href='https://www.instagram.com/gabrielle1guim/'>
                <FiInstagram /> Instagram
              </a>
            </li>

            <li>
              <a href='https://www.twitch.tv/gabrielleeg1'>
                <FiTwitch /> Twitch
              </a>
            </li>

            <li>
              <a href='https://github.com/gabrielleeg1'>
                <FiGithub /> Github
              </a>
            </li>
          </ul>
        </Column>

        <Column>
          <h3>Contact</h3>

          <ul>
            <li>gabrielle1guim@gmail.com</li>
          </ul>
        </Column>
      </Content>
    </Container>
  );
};

export default Footer;
