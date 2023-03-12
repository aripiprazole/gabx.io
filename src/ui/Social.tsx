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

import styles from '~/styles/ui/Social.module.scss';

import {SOCIAL} from '~/utils/constants';
import Popover, {PopoverItems} from '~/ui/Popover';

function Social() {
  return (
    <div className={styles.container}>
      {SOCIAL.map(({href, username, preview, icon: Icon}) => (
        <li key={href}>
          <Popover>
            <PopoverItems>
              {preview.map((Preview, key) => (
                <Preview key={key} href={href} username={username} />
              ))}
            </PopoverItems>
            <a href={href}>
              <Icon size='2.188rem' />
            </a>
          </Popover>
        </li>
      ))}
    </div>
  );
}

export default Social;
