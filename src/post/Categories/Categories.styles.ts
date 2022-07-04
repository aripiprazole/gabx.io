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
