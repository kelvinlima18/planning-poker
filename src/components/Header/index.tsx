import React from 'react';

import { Container } from './styles';

export const Header: React.FC = () => {

  return (
    <Container>
      <section>
        <h1>planning poker</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/invite">Entrar em uma sala</a>
        </nav>

        <button type="button">
          Entrar
        </button>
      </section>
    </Container>
  );
}