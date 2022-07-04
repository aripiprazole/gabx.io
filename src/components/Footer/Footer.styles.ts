import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 18rem;
  
  display: flex;

  color: #fefefe;
  background: #4842f5;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1068px;
  margin: 0 auto;
  
  padding: 1rem 0;
  
  display: grid;
  grid-template-columns: 1fr repeat(2, 8rem);
  gap: 1rem;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h2 {
    color: #cccccc;
  }

  .copyright {
    color: #cecece;
    font-size: 12.5px;
  }
`;

export const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #cccccc;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    a {
      color: #fefefe;

      font-weight: 200;

      display: flex;
      gap: 0.2rem;
      align-items: center;

      transition: 100ms;

      :hover {
        opacity: 0.8;
      }
    }
  }
`;
