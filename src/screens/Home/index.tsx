import React from 'react';
import { Container, Title, Logo } from './styles';
import ifrn from '../../assets/ifrn.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { theme } from '../../global/styles/theme';


export default function Home() {
  return (
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda</Title>
      <Title>IFRN</Title>

      <Input placeholder="Login" />
      <Input placeholder="Senha" secureTextEntry />
      <Button backgroundColor={theme.colors.gray}>Entrar</Button>
    
    </Container>
  );
}
