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

import {FiExternalLink} from 'react-icons/fi';

import {ABOUT_WORK, ARTICLES} from '~/utils/constants';

import styles from '~/styles/components/Work.module.scss';

function Work() {
  return (
    <div className={styles.container}>
      <h2>My work ❤️</h2>
      <p className={styles.about}>{ABOUT_WORK}</p>

      <ul>
        {ARTICLES.map(({title, description, href, icon: Icon}) => (
          <li key={title} className={styles.article}>
            <div className={styles.icon}>
              <Icon size={34} />
            </div>
            <main>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className={styles.readMore} href={href}>
                <FiExternalLink />
                Read more
              </a>
            </main>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Work;
