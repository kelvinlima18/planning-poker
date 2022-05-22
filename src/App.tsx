import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Routes } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';

export const App: React.FC = () => {
  return (
    <>
      <Routes />
      <Toaster toastOptions={{style: {marginTop: 60}}} />
      <GlobalStyle />
    </>
  );
}

export default App;
