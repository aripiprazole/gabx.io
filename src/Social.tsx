/*
 * My personal blog and portfolio website
 * Copyright (C) 2023  Gabrielle Guimarães
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

import styled from 'styled-components';

import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

function Social() {
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.ul`
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

export default Social;
