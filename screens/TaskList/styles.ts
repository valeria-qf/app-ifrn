import styled from 'styled-components/native';
import { theme } from "../../global/styles/theme";

export const StatusBarBackground = styled.View`
  height: 120px;
  width: 100%;
  background-color: ${ theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${theme.colors.background};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${ theme.colors.background};
  font-weight: medium;
`;

