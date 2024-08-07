import styled from 'styled-components/native';

interface StyledButtonProps {
  backgroundColor: string;
}

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  width: 100%;
  max-width: 313px;
  height: 49px;
  border-radius: 5px;
  justify-content: center;
`;
  
export const ButtonText = styled.Text`
  color: white;
`;
