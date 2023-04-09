import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
`;
const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;
const Button = styled.button`
  padding: 6px 12px;
  font-size: 16px;
`;

export { StatisticsContainer, Container, ButtonsContainer, Button };
