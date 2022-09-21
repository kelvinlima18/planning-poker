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

  @media only screen and (max-width: 1100px) {
    width: 100vw;
    justify-content: flex-start;
    padding: 0 20px;

    .cards-content {
      max-width: 800px;
      width: 100%;
      border-radius: 30px;
      padding: 20px;
      justify-content: center;
      height: auto;

      @media only screen and (max-width: 700px) {
        .user-card {
          height: fit-content;

          .card {
            width: 48px;
            height: 64px;
          }

          p {
            font-size: 10px;
            max-width: fit-content;
            word-break: normal;
            text-align: center;
          }
        }  
      }
    }
  }

`;
