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

import Popover, {PopoverItems} from '~/ui/Popover';

import styles from '~/styles/ui/Social.module.scss';

import {SOCIAL} from '~/utils/constants';

function Social() {
  return (
    <ul className={styles.container}>
      {SOCIAL.map(({brand, href, username, preview, icon: Icon}) => (
        <li key={href}>
          <Popover>
            <PopoverItems>
              {preview.map((Preview, key) => (
                <Preview key={key} username={username} />
              ))}
            </PopoverItems>
            <a href={href} aria-label={`Go to Gabi's ${brand}`}>
              <Icon size='28px' />
            </a>
          </Popover>
        </li>
      ))}
    </ul>
  );
}

export default Social;
