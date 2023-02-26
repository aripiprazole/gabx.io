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

import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';

import styles from '~/styles/components/Social.module.scss';

function Social() {
  return (
    <div className={styles.container}>
      <li>
        <a href='https://www.instagram.com/gabrielle1guim'>
          <FaInstagram size='2.188rem' />
        </a>
      </li>

      <li>
        <a href='https://www.linkedin.com/in/gabrielle-guimarães-1aa393233'>
          <FaLinkedin size='2.188rem' />
        </a>
      </li>

      <li>
        <a href='https://github.com/aripiprazole'>
          <FaGithub size='2.188rem' />
        </a>
      </li>

      <li>
        <a href='https://twitter.com/algebraic_gabi'>
          <FaTwitter size='2.188rem' />
        </a>
      </li>
    </div>
  );
}

export default Social;
