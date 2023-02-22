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

import Sidebar from '~/Sidebar';

type Props = {
  children: React.ReactNode;
};

function Root(props: Props) {
  const {children} = props;

  return (
    <Container>
      <Main>
        <Sidebar />
        <Content>
          {children}
        </Content>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const Main = styled.main`
  width: 100%;
  max-width: 80rem;
  
  display: flex;
  gap: 3rem;

  margin: auto;
  padding: 0 2rem;

  position: relative;
  z-index: 2;

  background: transparent;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  
  min-width: 30rem;

  color: #fefefe;

  > * {
    width: 100%;
  }

  > p {
    font-size: 1.2rem;
  }

  > h1 {
    font-size: 2rem;
  }
`;

export default Root;
