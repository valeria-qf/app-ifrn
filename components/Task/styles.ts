import styled from "styled-components/native";
import Checkbox from 'expo-checkbox';
import { theme } from "../../global/styles/theme";

export const StyledCheckbox = styled(Checkbox)`
    margin-right: 10px;
    `

export const Container = styled.View<{ isChecked: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  background-color: rgba(196, 196, 196, 50%);
  ${({ isChecked }) => isChecked && `
    background-color: ${theme.colors.background} 
  `}
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 16;
`

export const TaskText = styled.Text<{ isChecked: boolean }>`
  flex: 1;
  font-size: 16px;
  ${({ isChecked }) => isChecked && `
    text-decoration-line: line-through;
    color: ${theme.colors.primary};
  `}
`