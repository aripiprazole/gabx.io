import styled from 'styled-components';

export const Container = styled.div<{simple: boolean}>`
  position: relative;
  
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  
  background: #ececec;
  min-height: 15rem;
  padding: 1rem;
  
  border-radius: 0.5rem;
  
  cursor: pointer;
  
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    
    font-weight: 800;
  }
  
  p {
    flex: 1;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;

  width: 100%;
  height: 3.5rem;

  background: linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, #c9c9c9 80%),
  transparent;
  
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const ReadMore = styled.button`
  width: fit-content;
  margin: auto;

  padding: 0.5rem;

  outline: none;
  border: none;
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
