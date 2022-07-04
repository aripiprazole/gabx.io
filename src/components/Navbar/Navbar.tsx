/*
 * My personal blog and portfolio website
 * Copyright (C) 2022  Gabrielle Guimarães
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
import Link from 'next/link';

import {IconType} from 'react-icons';

import {Container} from './Navbar.styles';

export type Route = {
  readonly path: string;
  readonly title: string;
  readonly icon: IconType;
}

export type NavbarProps = {
  readonly routes: Route[];
};

const Navbar = ({routes}: NavbarProps) => {
  return (
    <Container>
      <ul>
        {routes.map(({path, title, icon: Icon}, index) => (
          <li key={index}>
            <Link href={path}>
              <a><Icon size={18} /> {title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navbar;
