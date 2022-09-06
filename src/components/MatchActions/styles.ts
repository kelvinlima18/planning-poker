import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.aside`
  width: 100%;

  .match-actions-content {
    display: flex;
    justify-content: center;
    border-radius: 4px;
    padding: 4px;
    
    button {
      display: flex;
      padding: 0 10px;
      height: 32px;
      background-color: #5060A3;
      border: 0;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      color: #ffffff;
      transition: background-color 0.4s;

          
      &:hover {
        background-color: ${lighten(0.04, '#5060A3')};
      }

      & + button {
        margin-left: 20px;
      }
    }
  }
`;
