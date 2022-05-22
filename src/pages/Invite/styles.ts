import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > section {
    max-width: 1152px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 60px auto 0;

    h1 {
      font-size: 38px;
      color: #222831;
      margin: 20px 0 40px;
      letter-spacing: 1.4px;
    }
    
    form {
      width: 600px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;

      input {
        height: 60px;
        border: 0;
        font-size: 16px;
        font-weight: 500;
        border-radius: 6px;
        padding: 0 20px;
        background-color: #ffffff;
        color: #222831;
        margin-bottom: 15px;

        &::placeholder {
          color: #222831;  
        }

        &:disabled {
          background-color: buttonface;
          color: #aaaaaa;
          border: 1px solid #aaaaaa;
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
