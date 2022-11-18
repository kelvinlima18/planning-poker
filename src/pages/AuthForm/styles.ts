import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: auto;

  form {
    display: flex;
    height: 100%;
    flex-direction: column;
    min-width: 400px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 6px;
    padding: 40px;

    h1 {
      margin-bottom: 40px;
      font-weight: 500;
      color: #5b5b5b;
    }

    button {
      margin-top: 20px;
      border-radius: 4px;
      height: 54px;
      background-color: #F59F85;
      border: 0;
      color: #ffffff;
      font-weight: 500;
      font-size: 14px;

      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.95);
      }
    }
  }

  p {
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
   
    a {
      text-decoration: none;
      font-weight: 500;
      color: #F59F85;
      cursor: pointer;
      margin-left: 4px;
    }
  }
`;

