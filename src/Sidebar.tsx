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
import styled from 'styled-components';
import Image from 'next/image';

function Sidebar() {
  return (
    <Container>
      <div>
        <Image
          alt="Gabrielle Guimarães"
          height={340}
          width={340}
          src="https://raw.githubusercontent.com/aripiprazole/aripiprazole/main/profile.png"
        />
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-grow: revert;
  min-width: 340px;
`;

export default Sidebar;