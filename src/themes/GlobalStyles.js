import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin:  0;
  }

  html{
    height: 100vh;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({theme})=> theme.colors.primaryShadow};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    

    &::-webkit-scrollbar {
      width: 11px;
      background-color: #cfd8dc;
    }

    &::-webkit-scrollbar-thumb{
      background-color: ${({theme})=> theme.colors.secondary};
      border-radius: 6px;
      border: 3px solid #cfd8dc;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

`;
