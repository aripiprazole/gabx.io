import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template: 
    'posts'    'divisory' 'sidebar'
    'view-all' 'divisory' 'view-all';
  grid-template-columns: 1fr 1px 12rem;
  gap: 1rem;

  flex: 1;
`;

export const Title = styled.h1`
  color: #4842f5;
  
  font-size: 18px;
  text-transform: uppercase;
  
  margin: 1rem 0;
`;

export const Main = styled.main`
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

export const Post = styled.div<{simple: boolean}>`
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

export const ReadMore = styled.div`
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

export const ReadMoreButton = styled.button`
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

export const Spacing = styled.span`
  background: #8c8c8c;
`;

export const CategorySidebar = styled.nav`
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
