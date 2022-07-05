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

export const Container = styled.footer`
  width: 100%;
  height: 18rem;

  color: #fefefe;
  background: #4842f5;

  padding: 1rem;
`;

export const Content = styled.main`
  max-width: 80rem;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap-reverse;
  gap: 1rem;
`;

export const Main = styled.main`
  min-width: 23rem;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .copyright {
    color: #cecece;
    font-size: 12.5px;
  }
`;

export const Info = styled.div`
  min-width: 20rem;
  
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    
    li, a {
      color: #cecece;
    }

    a {
      font-weight: 200;

      display: flex;
      gap: 0.2rem;
      align-items: center;

      transition: 100ms;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;
