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

import Sidebar from '~/Sidebar';
import Scroll from '~/Scroll';

import styles from '~/styles/components/Root.module.scss';

type Props = {
  children: React.ReactNode;
};

function Root(props: Props) {
  const {children} = props;

  return (
    <Scroll>
      <div className={styles.container}>
        <main className={styles.main}>
          <Sidebar />
          <div className={styles.content}>{children}</div>
        </main>
      </div>
    </Scroll>
  );
}

export default Root;
