import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 6px;
  padding: 0 16px;
  width: 100%;
  border: 2px solid #dddddd;
  color: #5b5b5b;
  display: flex;
  align-items: center;
  height: 54px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #F59F85;
      border-color: #F59F85;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #F59F85;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #5b5b5b;

    &::placeholder {
      color: #5b5b5b;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  margin-bottom: 8px;
  color: #F92F60;
  font-weight: 500;
`;
