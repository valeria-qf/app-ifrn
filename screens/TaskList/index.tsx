import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { theme } from '../../global/styles/theme';
import { Task } from "../../components/Task";

import {
  StatusBarBackground,
  Title,
  Subtitle,

} from './styles';

import { Container } from '../TaskCreation/styles';
export default function TaskList() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <StatusBarBackground>
        <Title>Agenda.IFRN</Title>
        <Subtitle>Você tem 2 tarefas</Subtitle>
      </StatusBarBackground>

      <Task taskDescription="Pagar boleto" />
      <Task taskDescription="Arrumar a cama" />
      <Task taskDescription="Entregar notebook" />

  
    </Container>
  );
};
