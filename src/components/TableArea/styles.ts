import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgb(39 41 45 / 8%);
    width: 600px;
    height: 250px;
    border-radius: 16px;
    padding: 10px;
    margin: 180px auto 0;
  }

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;

    div {
      width: calc(100vw - 100px);
      margin-top: 100px;
      margin-left: 80px;
    }
  }
`;
