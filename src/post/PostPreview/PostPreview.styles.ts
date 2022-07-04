import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 15rem;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
`;

export const ViewAll = styled.a`
  margin-left: auto;
  padding: 0.5rem;
  
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.2rem;
  cursor: pointer;

  background: #4842f5;
  color: #fefefe;

  transition: 100ms;

  text-transform: uppercase;

  :hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;
