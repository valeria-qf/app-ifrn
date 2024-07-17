import styled from 'styled-components/native';

export const StatusBarBackground = styled.View`
  height: 120px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.background};
  font-weight: medium;
`;

export const TaskItemContainer = styled.View<{ completed?: boolean }>`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background-color: ${({ completed }) => (completed ? 'transparent' : '#e8e8e8')};
`;

export const TaskText = styled.Text<{ completed?: boolean }>`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme, completed }) =>
    completed ? theme.colors.primary : theme.colors.gray};
  text-decoration-line: ${({ completed }) =>
    completed ? 'line-through' : 'none'};
`;

export const CheckBox = styled.TouchableOpacity<{ checked?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.gray};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const CheckBoxIcon = styled.View`
  width: 14px;
  height: 14px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
