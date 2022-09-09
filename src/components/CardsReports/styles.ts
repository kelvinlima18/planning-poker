import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

interface CardProps {
  faceCard: 'down' | 'up';
  isSpectator: boolean;
  selected: boolean;
}

const activeCard = () => {
  return css`
    border: 2px solid #F59F85;

    .up-corner, .down-corner {
      color: #F59F85;
    }

    .middle {
      background-color: ${lighten(0.2, '#F59F85')};
      color: #F59F85;
    }
  `;
}

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 250px;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;

  > h3 {
    position: absolute;
    top: 60px;
  }

  .cards-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto auto 20px;

    .cards-list {
      display: flex;
      width: 800px;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .status-box {
    background-color: #e9e9e9;
    padding: 20px;
    border-radius: 8px;
    position: absolute;
    top: -25px;
    box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 40%);
    font-size: 12px;
    font-weight: 500;
  }
`;

export const Card = styled.button<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  padding: 5px;
  height: 64px;
  border-radius: 6px;
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

  .amount-card-chosed {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #F59F85;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
  }

  &:hover {
    ${activeCard()}
  }

  ${({ faceCard, isSpectator, selected }): any => {
    if (faceCard === 'down' || isSpectator) {
      return css`
        pointer-events: none;
      `;
    }

    if (selected) {
      return activeCard();
    }
  }}
`;
