import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import TaskCreation from './src/screens/TaskCreation';
import {theme} from "./src/global/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <TaskCreation />
    </ThemeProvider>
  );
}
