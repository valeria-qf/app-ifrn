import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonText, StyledButton } from './styles';

interface ButtonProps {
  children: string;
  backgroundColor: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, backgroundColor, onPress }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} onPress={onPress}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
   
  );
};

export default Button;
