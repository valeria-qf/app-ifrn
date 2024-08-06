import React, { useState } from "react";
import { Container, StyledCheckbox, TaskText } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type TaskProps = {
  taskDescription: string; 
}

export function Task({ taskDescription }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container isChecked={isChecked}>
      <StyledCheckbox
        value={isChecked}
        onValueChange={setIsChecked}
      />
      
      <TaskText isChecked={isChecked}>{taskDescription}</TaskText>

      <MaterialCommunityIcons name="trash-can-outline" size={24} color="#B2B2B2" />                
    </Container>
  );
}