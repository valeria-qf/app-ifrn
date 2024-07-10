import React from "react";
import { Container, Title, Logo } from "./styles";
import ifrn from "../../assets/ifrn.png";
export default function Home() {
  return(
    <Container>
      <Logo source={ifrn} />
      <Title>Agenda IFRN</Title>
    </Container>
  )
}