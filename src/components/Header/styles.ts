import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100vw;
  height: 60px;
  background-color: #695AD5;

  section {
    max-width: 1152px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    h1 {
      display: flex;
      align-items: baseline;
      color: #ffffff;
      letter-spacing: 1px;
      font-size: 18px;

      &::before {
        content: "";
        display: flex;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin-right: 4px;
        background-color: #ffffff;
        position: relative;
      }
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 100%;
      width: 20%;
      margin-bottom: 30px;

      a {
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        transition: filter 0.4s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }

    button {
      background-color: #ffffff;
      padding: 7px 26px;
      border: 0;
      border-radius: 6px;
      color: #695AD5;
      font-size: 12px;
      font-weight: 600;
      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.95);
      }
    }
  }
`;
