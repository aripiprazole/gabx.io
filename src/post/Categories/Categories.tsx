import React from 'react';

import {Title} from '../Post.styles';
import {Container} from './Categories.styles';

export type CategoriesProps = {
  readonly categories: string[],
};

const Categories = ({categories}: CategoriesProps) => {
  return (
    <Container>
      <Title>Categories</Title>

      <ul>
        {categories.map((category, index) => (
          <li key={index}><button>{category}</button></li>
        ))}
      </ul>
    </Container>
  );
};

export default Categories;
