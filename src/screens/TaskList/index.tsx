import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import NavBar from '../../components/NavBar';
import { Task } from "../../components/Task";

import {
  StatusBarBackground,
  Title,
  Subtitle,

} from './styles';

import { BottomArea, Container } from '../TaskCreation/styles';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Pagar boleto', completed: false },
    { id: 2, title: 'Arrumar a cama', completed: false },
    { id: 3, title: 'Entregar notebook', completed: false },
  ]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <StatusBarBackground>
        <Title>Agenda.IFRN</Title>
        <Subtitle>Você tem 2 tarefas</Subtitle>
      </StatusBarBackground>

      <Task taskDescription="Pagar boleto"/>
      <Task taskDescription="Arrumar a cama"/>
      <Task taskDescription="Entregar notebook"/>

      <BottomArea>
        <NavBar />
      </BottomArea>
    </Container>
  );
};

export default TaskList;
