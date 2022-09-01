import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  position: fixed;
  width: 100%;
  inset: auto 0 0;
  justify-content: center;
  align-items: center;

  div {
    width: 400px;
    height: 150px;
    background-color: #ffffff;
    margin: auto auto 40px;
    border-radius: 16px;
    padding: 10px;
    box-shadow: 0px 2px 10px rgb(39 41 45 / 8%);
  }

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;

    div {
      margin-top: 10px;
      margin-left: 80px;
      width: calc(100vw - 100px);
    }
  }
`;
