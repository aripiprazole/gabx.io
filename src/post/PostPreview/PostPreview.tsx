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

const PostPreview = ({posts}: PostPreviewProps) => {
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

export default PostPreview;
