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

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 15rem;

  @media(max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
`;

export const ViewAll = styled.a`
  margin-left: auto;
  padding: 0.5rem;
  
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.2rem;
  cursor: pointer;

  background: #4842f5;
  color: #fefefe;

  transition: 100ms;

  text-transform: uppercase;

  :hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;
