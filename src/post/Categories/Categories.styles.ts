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
    flex-wrap: wrap;
    gap: 0.5rem;
    
    li button {
      display: block;
      padding: 0.5rem;
      
      outline: none;
      border: none;
      border-radius: 0.2rem;
      cursor: pointer;
      
      background: #4842f5;
      color: #fefefe;
      
      transition: 100ms;
      
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      
      :hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }
  }
`;
