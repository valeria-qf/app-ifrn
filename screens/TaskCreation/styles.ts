import styled from 'styled-components/native';
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${ theme.colors.background};;
    align-items: center;
    `
;

export const Title = styled.Text`
  font-size: 24px;
  color: ${theme.colors.primary};
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 30px;
`;

export const BottomArea = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
