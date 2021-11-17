import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #282a36;
    --background-secondary: #44475a;
    --background-button: #bd93f9;

    --color: #f8f8f2;

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