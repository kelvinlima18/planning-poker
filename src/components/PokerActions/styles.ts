import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e5e5e5;
  padding: 20px;
  border-radius: 10px;

  main {
    display: flex;
    width: 100%;

    .host-actions {
      display: flex;
      flex-direction: column;
      width: 100%;

      button {
        width: 140px;
        height: 34px;
        border: 0;
        font-weight: 500;
        border-radius: 6px;
        background-color: #695AD5;
        color: #ffffff;
        margin: auto auto 0;
        transition: filter 0.4s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    .cards-game {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 15px;
      column-gap: 35px;
      width: 100%;

      button {
        background-color: #ffffff;
        border: 7px double #695AD5;
        border-radius: 6px;
        color: #695AD5;
        font-size: 24px;
        font-weight: 700;

        &.card-selected {
          background-color: #695AD5;
          border: 7px double #ffffff;
          color: #ffffff;
        }
      }
    }
  }

`;
