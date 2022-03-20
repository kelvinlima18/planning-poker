import styled from 'styled-components';

export const PokerRoom = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;

  > main {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #222831;
    padding: 10px;
  
    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: #222831;
      border-radius: 10px;
    }
  }
`;

export const PokerBar = styled.aside`
  display: flex;
  height: 100%;
  width: 256px;
  background-color: #222831;

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
      color: #e5e5e5;
      width: 100%;
      margin: 30px auto;

      &::before {
        content: "";
        display: flex;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin-right: 4px;
        background-color: #e5e5e5;
        position: relative;
      }
    }

    section {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 50px;
      padding: 10px;
      border-radius: 10px;
      align-items: center;
      background-color: #00fff5;      

      .avatar {
        height: 100%;
        width: 30px;
        border-radius: 6px;
        background-color: #393e46;
      }

      p {
        margin-left: 20px;
        color: #222831;
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
        color: #e5e5e5;
        background-color: #393e46;
        border-radius: 6px;
        transition: all 0.5s;

        &:hover {
          background-color: #00fff5;
          color: #393e46;
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
  background-color: #222831;
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
      color: #222831;
      transition: all 0.4s;

      &:hover {
        background-color: #222831;
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
    color: #222831;
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
      background-color: #00fff5;
      color: #222831;
      font-weight: 500;
      transition: background-color 0.5s;

      &:hover {
        background-color: #00adb5;
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
    width: min-content;

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
        color: #222831;
        font-size: 18px;
        font-weight: 500;
        padding: 8px 6px;
        transition: background-color 0.5s;

        &:hover {
          background-color: #00fff5;
          color: #222831;
        }

        &:disabled {
          background-color: #e5e5e5;
          cursor: default;
        }

        &.card-selected {
          background-color: #00fff5;
          color: #222831;
          font-weight: 600;

          div {
            background-color: #00fff5;
          }
        }
      }
    }

    p {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: 20px auto 0;
      font-size: 12px;
      font-weight: 500;
      color: #222831;
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
        color: #222831;
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
          background-color: #00fff5;

          div {
            background-color: #00fff5;

            h3 {
              color: #222831;
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