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

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import {FiMoon, FiSun} from 'react-icons/fi';

import styles from '~/styles/ui/ThemeSwitcher.module.scss';
import useMediaQuery from '~/utils/useMediaQuery';
import clsx from 'clsx';

type Theme = 'light' | 'dark' | undefined;

type ThemeContextType = [Theme, (theme: Theme) => void];

export const ThemeContext = createContext<ThemeContextType>(null as any);

function Theme() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <button
      className={styles.container}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <FiSun size='2rem' /> : <FiMoon size='2rem' />}
    </button>
  );
}

export function ThemeProvider(props: PropsWithChildren) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={clsx(theme && `theme--${theme}`)}>{props.children}</div>
    </ThemeContext.Provider>
  );
}

export default Theme;
