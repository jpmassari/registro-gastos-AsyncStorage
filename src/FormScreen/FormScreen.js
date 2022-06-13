import React from "react";

import { Container, Title, Paragraph } from './styled/styled';
import { Form } from '../components/Form/Form';

export const FormScreen = () => {
  return (
    <Container>
      <Title>Registro de gastos</Title>
      <Paragraph>Elencar as despesas por data e categoria é o primeiro passo para a educação financeira.</Paragraph>
      <Form />
    </Container>
  )
}
