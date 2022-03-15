import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #161616;
    --background-secondary: #44475a;
    /* --color: #1766AC; */
    --color: #0053C3;
    /* --color: #49BA4C; */
    /* --color: #f9454b; */
    /* --color: #C13D5D; */
  }

  body {
    background-color: var(--background);
  }

  body, button, input, span, textarea, select {
    font: 400 14px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

`;