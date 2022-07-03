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
  }
`;
