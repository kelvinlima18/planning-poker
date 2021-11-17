import React from 'react';
import { Header } from './components/Header';
import { Routes } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
