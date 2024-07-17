import React from 'react';
import { NavBarContainer } from './styles';
import NavButton from '../NavButton';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavButton iconName="calendar-check-outline">Registrar Tarefa</NavButton>
      <NavButton iconName="format-list-bulleted">Listar Tarefas</NavButton>
    </NavBarContainer>
  );
};

export default NavBar;
