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

import React, {useState} from 'react';

import {FiMoon, FiSun} from 'react-icons/fi';

import styles from '~/styles/components/ThemeSwitcher.module.scss';

type Theme = 'light' | 'dark' | undefined;

function ThemeSwitcher() {
  const [theme] = useState<Theme>();

  return (
    <button className={styles.container}>
      {theme === 'light' ? <FiSun size='2rem' /> : <FiMoon size='2rem' />}
    </button>
  );
}

export default ThemeSwitcher;
