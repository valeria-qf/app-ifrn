import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};;
    align-items: center;
    `
;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 30px;
`;

export const BottomArea = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

