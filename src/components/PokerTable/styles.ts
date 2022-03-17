import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 20px;
  
  section {
    display: flex;
    flex-direction: row;
    
    .card-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;

      .card {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        width: 100px;
        border-radius: 6px;
        background-color: #e5e5e5;
        margin-right: 20px;
      }

      h5 {
        margin-left: -20px;
      }
    }
  }
`;
