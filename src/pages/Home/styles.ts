import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > section {
    max-width: 1152px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    max-width: 600px;
    padding: 20px;
    margin-top: 100px;
    align-items: center;
    margin: 80px auto 0;
    
    h2 {
      font-size: 38px;
      color: #222831;
      margin: 20px 0 40px;
      letter-spacing: 1.4px;
    }

    form {
      display: flex;
      flex-direction: column;

      > div {
        display: flex;
        
        > input {
          height: 60px;
          width: 320px;
          margin-bottom: 15px;
          border:0;
          font-size: 16px;
          font-weight: 500;
          border-radius: 6px;
          padding: 0 20px;
          background-color: #ffffff;
          color: #222831;

          &::placeholder {
            color: #222831;  
          }

          &:first-child {
            margin-right: 10px;
          }
        }
      }

      .spectator-wrapper {
        display: flex;
        align-items: center;
        height: 40px;

        input {
          height: 30px;
          width: 15px;
          margin: 0 15px;
        }

        label {
          color: #222831;
        }
      }

      > button {
        height: 50px;
        border-radius: 6px;
        border: 0;
        margin-top: 15px;
        font-size: 16px;
        font-weight: 700;
        background-color: #00fff5;
        color: #222831;
        transition: background-color 0.5s;

        &:hover {
          background-color: #00adb5;
        }

        &:disabled {
          background-color: buttonface;
          color: #aaaaaa;
          pointer-events: none;
          user-select: none;
        }
      }
    }
  }
`;
