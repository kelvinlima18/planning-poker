import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100vw;
  height: 60px;
  background-color: #222831;

  section {
    max-width: 1152px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      display: flex;
      align-items: baseline;
      color: #ffffff;
      letter-spacing: 1px;
      font-size: 18px;
      user-select: none;

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
      align-items: center;
      height: 100%;
      width: 20%;

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

    > a {
      color: #00fff5;
      text-decoration: none;
      padding: 7px 26px;
      border: 0;
      border-radius: 6px;
      font-size: 12px;
      background-color: #222831;
      font-weight: 600;
      transition: color 0.4s;
      cursor: pointer;

      &:hover {
        color: #00adb5;
      }
    }
  }
`;
