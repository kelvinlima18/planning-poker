import styled from 'styled-components';

import { lighten } from 'polished';

export const RoomContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #E5E5E5;
`;

export const RoomContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1128px;
  height: 100%;
  margin: auto;
  padding: 20px;
`;


export const RoomActions = styled.header`
  display: flex;

  h4 {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    min-height: 39px;
    border-radius: 8px;
    border: 1px solid #dddddd;
    padding: 0 20px;
    font-size: 16px;
  }

  button {
    margin: auto 20px auto auto;
    margin-left: auto;
    height: 32px;
    width: 100px;
    font-size: 12px;
    border-radius: 8px;
    border: 0;
    background-color: #1f008b;
    color: #ffffff;
    font-weight: 500;
    transition: background-color 0.5s;
    
    
    &:hover {
      background-color: ${lighten(0.15, '#1f008b')};
    }
  }

  section {
    height: 39px;
    background-color: #ffffff;
    padding: 0 20px 0 6px;
    min-width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid #dddddd;
    font-size: 12px;

    .avatar {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      margin-right: 14px;
      border: 1px solid #dddddd;
      background-color: #eee;
    }
  }
`;
