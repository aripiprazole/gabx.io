import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap');
  
  :root {
    --background: #f3f3f3;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *, input, button, select, textarea, optgroup, option {
    font-family: 'JetBrains Mono', monospace;
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
    background: var(--background);
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
