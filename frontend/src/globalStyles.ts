import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    min-height: 100vh;
    font-family: 'Rubik', sans-serif ;
  }

  a, li {
    text-decoration: none;
    list-style: none;
  }
`

export { GlobalStyles }