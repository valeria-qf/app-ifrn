import React from 'react';
import { StyledNavButton, NavButtonContent, NavButtonText } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface NavButtonProps {
  iconName: string; 
  children: React.ReactNode; 
}

const NavButton: React.FC<NavButtonProps> = ({ iconName, children }) => {
  return (
    <StyledNavButton>
      <NavButtonContent>
        <MaterialCommunityIcons name={iconName as any} size={28} color="black" />
        <NavButtonText>{children}</NavButtonText>
      </NavButtonContent>
    </StyledNavButton>
  );
};

export default NavButton;
