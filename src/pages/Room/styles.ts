import styled from 'styled-components';

export const PokerRoom = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;

  > main {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    padding: 10px;
  
    > section {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: #e9e9e9;
      border-radius: 10px;
    }
  }
`;

export const PokerBar = styled.aside`
  display: flex;
  height: 100%;
  width: 256px;
  background-color: #ffffff;

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
      color: #172B4D;
      width: 100%;
      margin: 30px auto;

      &::before {
        content: "";
        display: flex;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin-right: 4px;
        background-color: #172B4D;
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
      background-color: #4b72ff;
      margin-top: auto;

      .avatar {
        height: 100%;
        width: 40px;
        border-radius: 6px;
        background-color: #e5e5e5;
      }

      p {
        margin-left: 20px;
        color: #ffffff;
        font-weight: 500;
        font-size: 15px;
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
        font-size: 13px;
        font-weight: 500;
        margin-bottom: 6px;
        text-decoration: none;
        color: #172B4D;
        background-color: #ffffff;
        border-radius: 6px;

        &:hover {
          background-color: #e5e5e5;
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
  background-color: #ffffff;
  padding: 10px;
`;

export const PokerActions = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #4b72ff;
  border-radius: 10px 10px 0 0;
  padding: 20px;

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
      color: #35353A;
      transition: filter 0.4s;

      &:hover {
        filter: brightness(0.9);
      }

      & + button {
        margin-left: 10px;
      }
    }
  }

  h1 {
    display: flex;
    font-size: 20px;
    color: #ffffff;
    font-weight: 500;
    justify-content: right;
    width: 100%;
  }

  #invite-wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 100%;

    button {
      margin-left: 30px;
      height: 30px;
      width: 100px;
      font-size: 12px;
      border-radius: 6px;
      border: 0;
      background-color: #FEC339;
      font-weight: 500;
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
    background-color: #ffffff;
    display: grid;
    grid-template-columns: 55px 55px 55px;
    gap: 18px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 12%);
    height: fit-content;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 75px;
      border: 2px solid #e5e5e5;
      border-radius: 6px;
      background-color: #ffffff;
      color: #172B4D;
      font-size: 16px;
      font-weight: 500;
      padding: 8px 6px;

      div {
        width: 100%;
        border-radius: 4px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e5e5e5;
      }

      &.card-selected {
        border-color: #172B4D;
        color: #ffffff;
        font-weight: 600;

        div {
          background-color: #172B4D;
        }
      }
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
          background-color: #e5e5e5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;

          h3 {
            font-size: 28px;
            font-weight: 500;
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