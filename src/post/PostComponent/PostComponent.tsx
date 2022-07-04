import React from 'react';

import {Container, Footer, ReadMore} from './PostComponent.styles';

export type Post = {
  readonly title: string,
  readonly preview: string,
  readonly simple?: boolean,
  readonly latestEditDate?: Date,
}

export type PostComponentProps = {
  readonly post: Post;
}

const PostComponent = ({post}: PostComponentProps) => {
  return (
    <Container simple={post.simple ?? false}>
      <h2>{post.title}</h2>
      <p>{post.preview}</p>
      {!post.simple && (
        <Footer>
          <ReadMore>Read more</ReadMore>
        </Footer>
      )}
    </Container>
  );
};

export default PostComponent;
