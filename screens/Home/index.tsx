import React from 'react';
import { Container, Title, Logo } from './styles';
import ifrn from '../../assets/ifrn.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { theme } from '../../global/styles/theme';
import { useRouter } from 'expo-router';


export default function Home() {
  const router = useRouter(); 

  const navigateToHome = () =>
  {
    router.push('/(tabs)');
  }
  return (
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda</Title>
      <Title>IFRN</Title>

      <Input placeholder="Login" />
      <Input placeholder="Senha" secureTextEntry />
      <Button backgroundColor={theme.colors.gray} onPress={navigateToHome}>Entrar</Button>

    </Container>
  );
}
