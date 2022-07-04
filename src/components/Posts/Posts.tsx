import React from 'react';

import Link from 'next/link';

import {FiArrowRight} from 'react-icons/fi';

import {
  CategorySidebar,
  Container,
  Post,
  Main,
  ReadMore,
  Spacing,
  ViewAll,
  Footer,
  ReadMoreButton,
  Title,
} from './Posts.styles';

export type Post = {
  readonly title: string,
  readonly preview: string,
  readonly simple?: boolean,
  readonly latestEditDate?: Date,
}

export type PostsProps = {
  readonly posts: Post[],
};

const Posts = ({posts}: PostsProps) => {
  return (
    <Container id='posts'>
      <Main>
        <Title>Recent posts</Title>

        <ul>
          {posts.map(({
            title,
            preview,
            simple = false,
            latestEditDate,
          }, index) => (
            <li key={index}>
              <Post simple={simple}>
                <h2>{title}</h2>
                <p>{preview}</p>
                {!simple && (
                  <ReadMore>
                    <ReadMoreButton>Read more</ReadMoreButton>
                  </ReadMore>
                )}
              </Post>
            </li>
          ))}
        </ul>
      </Main>

      <Spacing />

      <CategorySidebar>
        <Title>Categories</Title>

        <ul>
          <li><button>Language Dev</button></li>
          <li><button>Frontend</button></li>
          <li><button>Backend</button></li>
        </ul>
      </CategorySidebar>

      <Footer>
        <Link href='/posts'>
          <ViewAll><FiArrowRight /> View all posts...</ViewAll>
        </Link>
      </Footer>
    </Container>
  );
};

export default Posts;
