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
