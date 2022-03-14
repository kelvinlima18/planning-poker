import styled from 'styled-components';

export const Container = styled.div`
  .cards-game {
    display: flex;
    margin: 10px 20px;
  
    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      height: 80px;
      width: 60px;
      border-radius: 6px;
      border: 0;
      background-color: #b3b3b3;

      & + button {
        margin-left: 20px;
      }
    }

    .card-selected {
      background-color: blue;
    }
  }
`;
