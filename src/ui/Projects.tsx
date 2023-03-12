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

import {ABOUT_PROJECTS, PROJECTS} from '~/utils/constants';

import Work from '~/ui/Work';

import styles from '~/styles/ui/Work.module.scss';

function Projects() {
  return (
    <div className={styles.container}>
      <h2>My projects 🧪</h2>
      <p>{ABOUT_PROJECTS}</p>

      <ul className={styles.articles}>
        {PROJECTS.map(({title, description, href, icon}) => (
          <li key={title}>
            <Work
              title={title}
              description={description}
              href={href}
              icon={icon}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
