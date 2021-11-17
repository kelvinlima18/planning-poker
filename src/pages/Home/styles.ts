import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1290px;
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
    
    h2 {
      font-size: 36px;
      color: var(--color);
      margin: 20px 0 40px;
      letter-spacing: 1.4px;
    }

    form {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        
        input {
          height: 53px;
          width: 100%;
          margin-bottom: 15px;
          border: 0;
          font-size: 13px;
          border-radius: 10px;
          padding-left: 20px;
          background-color: var(--background-secondary);
          color: var(--color);

          &::placeholder {
            color: var(--color);  
          }

          &:first-child {
            margin-right: 10px;
          }
        }
      }

      button {
        height: 42px;
        border-radius: 8px;
        border: 0;
        font-size: 13px;
        font-weight: 700;
        background-color: var(--background-button);
        color: var(--color);
        transition: filter 0.4s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
