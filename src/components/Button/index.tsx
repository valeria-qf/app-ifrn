import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ButtonText, StyledButton } from './styles';

interface ButtonProps {
  children: string;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({ children, backgroundColor }) => {
  return (
    <StyledButton backgroundColor={backgroundColor}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  );
};

export default Button;
