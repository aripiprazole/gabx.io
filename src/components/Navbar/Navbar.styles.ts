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

export const Container = styled.nav`
  ul {
    display: flex;
    gap: 3rem;
    width: fit-content;
    margin: auto;
    
    a {
      text-decoration: none;
      color: #f3f3f3;
      font-size: 1.025rem;
      
      text-transform: uppercase;
      
      display: flex;
      padding: 0.2rem;
      border-radius: 4.125rem;
      background: #4842f5;
      
      align-items: center;
      gap: 0.3rem;
      
      :hover {
        opacity: 0.8;
      }
    }
    
    @media(max-width: 600px) {
      flex-direction: column;
    }
  }
`;
