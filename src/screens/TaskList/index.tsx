import React, { useState } from 'react';
import { StatusBar, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import NavBar from '../../components/NavBar';

import {
  TaskItemContainer,
  TaskText,
  StatusBarBackground,
  Title,
  Subtitle,
  CheckBox,
  CheckBoxIcon,
} from './styles';
import { BottomArea, Container } from '../TaskCreation/styles';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Pagar boleto', completed: false },
    { id: 2, title: 'Arrumar a cama', completed: false },
    { id: 3, title: 'Entregar notebook', completed: false },
  ]);

  const handleToggleTask = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <StatusBarBackground>
        <Title>Agenda.IFRN</Title>
        <Subtitle>Você tem {tasks.filter(task => !task.completed).length} tarefas</Subtitle>
      </StatusBarBackground>

      {tasks.map(task => (
        <TaskItemContainer key={task.id} completed={task.completed}>
          <CheckBox checked={task.completed} onPress={() => handleToggleTask(task.id)}>
            {task.completed ? <CheckBoxIcon /> : null}
          </CheckBox>
          <TaskText completed={task.completed}>{task.title}</TaskText>
        </TaskItemContainer>
      ))}

      <BottomArea>
        <NavBar />
      </BottomArea>
    </Container>
  );
};

export default TaskList;
