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

import Image from 'next/image';

import Medications from '~/ui/Medications';

import styles from '~/styles/ui/Sidebar.module.scss';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <Image
            loading={process.env.NODE_ENV === 'production' ? 'eager' : 'lazy'}
            width={680}
            height={680}
            alt='Gabrielle Guimarães'
            src='/profile.webp'
          />
        </div>

        <Medications />
      </div>
    </div>
  );
}

export default Sidebar;
