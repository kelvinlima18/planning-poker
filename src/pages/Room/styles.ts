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
      user-select: none;

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
        height: 30px;
        width: 39px;
        border-radius: 6px;
        background-color: #393e46;
      }

      .userdata-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-left: 10px;
        
        p {
          color: #222831;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.6px;
        }
        
        span {
          display: flex;
          align-items: center;
          font-size:8px;
          background-color: #00adb5;
          width: fit-content;
          padding: 1px 4px;
          color: #ffffff;
          border-radius: 4px;
        }
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

  @media only screen and (max-width: 800px) {
    display: none;
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
  overflow-x: auto;
  overflow-y: hidden;

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
        background-color: #00fff5;
        color: #222831;

        &:hover {
          background-color: #00adb5;
        }
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

  @media only screen and (max-width: 800px) {
    h1 {
      display: flex;
      margin: 0 20px;
      min-width: fit-content;
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
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 12%);
    height: fit-content;
    min-width: 300px;

    .cards-list {
      display: grid;
      row-gap: 25px;
      column-gap: 40px;
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
    
    > section {
      display: flex;
      flex-direction: column;
      margin: 0;
      width: 100%;

      > div:last-child {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 10px;
      }

      .chosen-card {
        display: flex;
        flex-direction: column;

        .card {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 65px;
          border-radius: 6px;
          background-color: #e5e5e5;
          color: #222831;
          font-size: 18px;
          font-weight: 500;
          padding: 8px 6px;
        }

        .amount {
          margin-left: 8px;
          margin-top: 3px;
          display: flex;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          width: 100%;
        }
      }

      .average {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: #222831;
        margin-bottom: 20px;
        border-radius: 6px;
        padding: 20px 0;

        h3 {
          font-size: 24px;
          letter-spacing: 1.5px;
          font-weight: 500;
          color: #f9f9f9;
        }

        span {
          font-size: 10px;
          font-weight: 300;
          color: #b3b3b3;
        }
      }
    }

    p {
      display: flex;
      max-width: 90%;
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
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 20px;
    row-gap: 20px;
    height: fit-content;
    user-select: none;
    
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
        user-select: none;

        div {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          user-select: none;

          h3 {
            font-size: 32px;
            font-weight: 500;
            color: #172B4D;
          }
        }

        &.card-selected {
          background-color: #172B4D;

          div {
            background-color: #172B4D;

            h3 {
              color: #222831;
            }
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

        &.spectator-card {
          background-color: #f9f9f9;
        }
      }

      h5 {
        margin-left: -20px;
        margin-top: 10px;
        font-weight: 400;
        font-size: 12px;
        max-width: 100%;
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    overflow: scroll;

    section {
      margin-top: 20px;
      margin-left: 0;
    }
  }
`;