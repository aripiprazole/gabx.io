import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *, input, button, select, textarea, optgroup, option {
    font-family: -apple-system, 'Montserrat', BlinkMacSystemFont,
      'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html,
  body,
  #root,
  #__next {
    height: 100%;
    width: 100%;
    min-width: 25.625rem;
    font-size: 14px;
  }
  
  *:focus {
    border: none;
    outline: none;
  }
  
  a {
    text-decoration: none;
  }
  
  ul,
  li {
    list-style: none;
  }
`;

export default GlobalStyle;
