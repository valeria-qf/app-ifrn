import styled from 'styled-components/native';

export const StyledNavButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const NavButtonContent = styled.View`
  align-items: center; 
`;

export const NavButtonText = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: medium;
  margin-top: 5px;
`;
