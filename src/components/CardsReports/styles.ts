import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 240px;
  padding: 20px 0;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #E0DFDC;
  border-radius: 8px;

  .cards-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .status-box {
      margin: 0 auto;
    }

    .cards-list {
      display: flex;
      width: 600px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

export const Card = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  padding: 5px;
  height: 56px;
  border-radius: 8px;
  border: 2px solid ${darken(0.1, '#E0DFDC')};
  background-color: #ffffff;
  position: relative;
  transition: all 0.4s;

  .up-corner, .down-corner {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 8px;
    display: flex;
    padding-top: 2px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    font-weight: 500;

    &.up-corner {
      top: 0;
      left: 0;
    }

    &.down-corner {
      bottom: 0;
      right: 0;
    }
  }

  .middle {
    background-color: #E0DFDC;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  &:hover {
    border: 2px solid #1f008b;

    .up-corner, .down-corner {
      color: #1f008b;
    }

    .middle {
      background-color: ${lighten(0.6, '#1f008b')};
      color: #1f008b;
    }
  } 
`;
