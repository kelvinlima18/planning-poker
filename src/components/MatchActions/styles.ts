import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.aside`
  width: 100%;
  margin-top: 40px;

  .match-actions-content {
    border-radius: 4px;
    padding: 4px;
    
    button {
      margin: auto;
      display: flex;
      padding: 0 10px;
      height: 32px;
      background-color: #1f008b;
      border: 0;
      border-radius: 8px;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
      color: #ffffff;

          
      &:hover {
        background-color: ${lighten(0.15, '#1f008b')};
      }
    }
  }
`;
