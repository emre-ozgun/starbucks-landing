import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }


  body {
    width: 100%
    overflow-x: hidden;
    background-color: #fff;
    font-size: 14px;
    overflow:hidden;
  }

  body.active {
    overflow:hidden;
  }

  @media (min-width: 768px) {
    
    body {
      overflow: visible;
    }
  }


  a {
    text-decoration: none;
    color: rgb(12, 12, 12);
    display: inline-block;
  }
  li {
    list-style-type: none;
  }
  header {
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }

  main {
    max-width: 1400px;
    margin: 0 auto;
  }
  
`;

export default GlobalStyles;
