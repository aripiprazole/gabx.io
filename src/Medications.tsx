/* eslint-disable @next/next/no-img-element */
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

import {MEDICATIONS} from '~/utils/constants';

import styles from '~/styles/components/Medications.module.scss';

function Medications() {
  return (
    <div className={styles.container}>
      <h3>Meet the other compounds! 🙂</h3>
      {MEDICATIONS.map((medication) => (
        <div key={medication} className={styles.medication}>
          ~
          <div className={styles.icon}>
            <img alt={medication} src={`${medication}.png`} />
          </div>
          <a href={`https://github.com/${medication}`}>{medication}</a>
        </div>
      ))}
    </div>
  );
}

export default Medications;
