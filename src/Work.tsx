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
import {IconType} from 'react-icons';

import styles from '~/styles/components/Work.module.scss';

type Props = {
  title: string;
  description: string;
  href: string;
  icon: IconType;
};

function Work(props: Props) {
  const {title, description, href, icon: Icon} = props;

  return (
    <article className={styles.work}>
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
    </article>
  );
}

export default Work;
