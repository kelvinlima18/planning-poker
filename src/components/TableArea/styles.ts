import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100%;

  .cards-content {
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    background-color: #ffffff;
    width: 600px;
    height: 250px;
    border-radius: 8px;
    padding: 10px;
    margin: 20px auto 0;
    border: 1px solid #E0DFDC;

    .user-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .card {
        width: 56px;
        height: 72px;
        border-radius: 4px;
        background-color: #ccc;
      }

      p {
        font-size: 12px;
        font-weight: 500;
      }
    }

  }

  @media only screen and (max-width: 900px) {
    justify-content: flex-start;

    div {
      width: calc(100vw - 100px);
      margin-top: 100px;
      margin-left: 80px;
    }
  }
`;
