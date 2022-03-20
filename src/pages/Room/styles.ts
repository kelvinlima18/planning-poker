import styled from 'styled-components';

export const PokerRoom = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;

  > main {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #172B4D;
    padding: 10px;
  
    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: #172B4D;
      border-radius: 10px;
    }
  }
`;

export const PokerBar = styled.aside`
  display: flex;
  height: 100%;
  width: 256px;
  background-color: #172B4D;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    padding: 10px;

    h1 {
      display: flex;
      align-items: baseline;
      justify-content: center;
      letter-spacing: 1px;
      font-size: 18px;
      color: #FA8072;
      width: 100%;
      margin: 30px auto;

      &::before {
        content: "";
        display: flex;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin-right: 4px;
        background-color: #FA8072;
        position: relative;
      }
    }

    section {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 60px;
      padding: 10px;
      border-radius: 10px;
      align-items: center;
      background-color: #FA8072;      

      .avatar {
        height: 100%;
        width: 40px;
        border-radius: 6px;
        background-color: #e5e5e5;
      }

      p {
        margin-left: 20px;
        color: #ffffff;
        font-weight: 600;
        font-size: 14px;
        letter-spacing: 0.6px;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      margin: 30px auto 0;
      width: 100%;

      a {
        display: flex;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 40px;
        font-size: 12px;
        letter-spacing: 0.6px;
        font-weight: 500;
        margin-bottom: 6px;
        text-decoration: none;
        color: #ffffff;
        background-color: #172B4D;
        border-radius: 6px;
        transition: all 0.5s;

        &:hover {
          background-color: #FA8072;
          color: #ffffff;
        }
      }
    }
  }
`;

export const PokerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #172B4D;
  padding: 10px;
`;

export const PokerActions = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #e5e5e5;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  border-bottom: 1px solid #dddddd;

  .host-actions {
    display: flex;

    button {
      width: 120px;
      height: 30px;
      border: 0;
      font-size: 12px;
      font-weight: 500;
      border-radius: 6px;
      background-color: #ffffff;
      color: #172B4D;
      transition: all 0.4s;

      &:hover {
        background-color: #172B4D;
        color: #ffffff;
      }

      & + button {
        margin-left: 10px;
      }
    }
  }

  h1 {
    display: flex;
    font-size: 20px;
    color: #172B4D;
    font-weight: 500;
    justify-content: right;
    margin-right: 60px;
    width: 100%;
  }

  #invite-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 100%;

    button {
      margin-left: 20px;
      height: 30px;
      width: 100px;
      font-size: 12px;
      border-radius: 6px;
      border: 0;
      background-color: #FA8072;
      color: #ffffff;
      font-weight: 500;
      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  
    input {
      width: 300px;
      height: 30px;
      font-size: 12px;
      padding: 0 10px;
      border: 1px solid buttonface;
      border-radius: 6px;
      background-color: #ffffff;
    }
  }
`;

export const PokerTable = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: 0;
  background-color: #e5e5e5;
  border-radius: 0 0 10px 10px;

  aside {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 12%);
    height: fit-content;
    
    div {
      display: grid;
      gap: 18px;
      grid-template-columns: 50px 50px 50px;
      
    
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 65px;
        border: 0;
        border-radius: 6px;
        background-color: #e5e5e5;
        color: #172B4D;
        font-size: 18px;
        font-weight: 500;
        padding: 8px 6px;

        &:disabled {
          background-color: #e5e5e5;
          cursor: default;
        }

        &.card-selected {
          border-color: #FA8072;
          background-color: #FA8072;
          color: #ffffff;
          font-weight: 600;

          div {
            background-color: #FA8072;
          }
        }
      }
    }

    p {
      display: flex;
      margin: 20px auto 0;
      font-size: 12px;
      font-weight: 500;
      color: #172B4D;
      word-break: break-all;
      text-align: center;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    
    .card-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      .card {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 80px;
        border-radius: 6px;
        background-color: #ffffff;
        color: #172B4D;
        margin-right: 20px;
        box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 12%);
        padding: 8px;

        div {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;

          h3 {
            font-size: 32px;
            font-weight: 500;
            color: #172B4D;
          }
        }

        &.up-card {
          background-color: #FA8072;

          div {
            background-color: #FA8072;

            h3 {
              color: #ffffff;
            }
          }
        }
      }

      h5 {
        margin-left: -20px;
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
      }
    }
  }
`;