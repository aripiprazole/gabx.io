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

import {FiArrowRight} from 'react-icons/fi';

import {Container, Main, ViewAll, Footer} from './PostPreview.styles';
import {Title} from '../Post.styles';

import Categories from '~/post/Categories/Categories';
import PostComponent, {Post} from '~/post/PostComponent/PostComponent';

export type PostPreviewProps = {
  readonly posts: Post[],
};

export default function PostPreview({posts}: PostPreviewProps) {
  return (
    <Container id='posts'>
      <Main>
        <Title>Recent posts</Title>

        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <PostComponent post={post} />
            </li>
          ))}
        </ul>

        <Footer>
          <Link href='/posts'>
            <ViewAll><FiArrowRight /> View all posts...</ViewAll>
          </Link>
        </Footer>
      </Main>

      <Categories
        categories={[
          'Language Dev',
          'Frontend',
          'Backend',
          'Mobile',
          'Embedded',
          'Bukkit',
          'Minecraft Protocol',
          'Minecraft Mods',
        ]}
      />
    </Container>
  );
};
