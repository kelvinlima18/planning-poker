import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1152px;
  height: calc(100vh - 60px);
  display: flex;
  margin: 0 auto;

  section {
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
      color: #FFFFFF;
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
          border: 0;
          font-size: 16px;
          font-weight: 500;
          border-radius: 6px;
          padding-left: 20px;
          background-color: #222222;
          color: #646464;

          &::placeholder {
            color: #646464;  
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
          color: #646464;
        }
      }

      > button {
        height: 60px;
        border-radius: 6px;
        border: 0;
        margin-top: 15px;
        font-size: 18px;
        font-weight: 700;
        background-color: var(--color);
        color: #ffffff;
        transition: filter 0.4s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
