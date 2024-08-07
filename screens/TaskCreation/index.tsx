import React from 'react';
import Input from '../../components/Input';
import { Container, Title } from './styles';
import { StatusBar} from 'react-native';
import { theme } from '../../global/styles/theme';
import Button from '../../components/Button';
import { useRouter } from 'expo-router';

export default function TaskCreation() {

  const router = useRouter();
  function handlePress() {
    router.push('/tasklist');
  }
  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor={theme.colors.primary} />

      <Title>Cadastro de Tarefa</Title>
      <Input placeholder="Titulo" />
      <Input placeholder="Descrição" />
      <Input placeholder="Categoria" />
      <Input placeholder="Data" />
      <Button backgroundColor={theme.colors.primary} onPress={handlePress} >Continuar</Button>

  
    </Container>
  );
}
