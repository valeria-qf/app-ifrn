import React from 'react';
import Input from '../../components/Input';
import { BottomArea, Container, Title } from './styles';
import { StatusBar, View } from 'react-native';
import { theme } from '../../global/styles/theme';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

export default function TaskCreation() {
  return (
    <Container>
        <StatusBar barStyle='light-content' backgroundColor={theme.colors.primary} />
        
        <Title>Cadastro de Tarefa</Title>
        <Input placeholder="Titulo" />
        <Input placeholder="Descrição" />
        <Input placeholder="Categoria" />
        <Input placeholder="Data" />
        <Button backgroundColor={theme.colors.primary}>Continuar</Button>
        
        <BottomArea>
        <NavBar />
      </BottomArea>
    </Container>
  );
}
