import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #ffffff;
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