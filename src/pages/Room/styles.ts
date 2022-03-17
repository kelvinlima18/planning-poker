import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1152px;
  display: flex;
  flex-direction: column;
  margin: 30px auto 0;
  height: calc(100vh - 100px);

  header {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 100%;

    button {
      margin-left: 30px;
      height: 36px;
      width: 120px;
      border-radius: 6px;
      border: 0;
      background-color: #FEC339;
      font-weight: 500;
      color: #35353A;
    }

    input {
      width: 400px;
      height: 36px;
      padding: 0 10px;
      border: 1px solid buttonface;
      border-radius: 6px;
    }

    h1 {
      margin-right: auto;
      font-size: 26px;
    }
  }

  > section {
    display: flex;
    margin: 20px auto;
    width: 100%;
    height: 100%;

    .poker-actions {
      display: flex;
      width: 30%;
    }

    .poker-table {
      display: flex;
      width: 70%;
    }
  }
`;
