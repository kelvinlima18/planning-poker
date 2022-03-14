import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100vw;
  height: 60px;

  section {
    width: 1290px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;

    h1 {
      color: #b3b3b3;
      letter-spacing: 2px;
      font-size: 23px;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-left: 100px;
      height: 100%;
      width: 20%;
      margin-bottom: 30px;

      a {
        color: #44475a;
        font-weight: 700;
        font-size: 16px;
        text-decoration: none;
        transition: color 0.4s;

        &:hover {
          color: #FFFFFF;
        }
      }
    }
  }
`;
