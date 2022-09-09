import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: calc(100vh - 310px);
  margin-top: 40px;

  .cards-content {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    background-color: #ffffff;
    width: 800px;
    height: 300px;
    border-radius: 150px;
    padding: 20px 100px;
    margin: auto;
    border: 1px solid #E0DFDC;

    .user-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .card {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 72px;
        border-radius: 4px;
        background-color: #ccc;
        transition: all 0.4s;

        p {
          font-size: 22px;
          font-weight: 600;
          color: #ffffff;
        }
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
