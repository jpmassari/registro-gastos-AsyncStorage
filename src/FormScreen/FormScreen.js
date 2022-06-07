import React from "react";

import { Content, Title, Paragraph } from '../components/styled/styled';
import { Form } from '../components/Form/Form';

export const FormScreen = () => {
  return (
    <Content>
      <Title>Registro de gastos</Title>
      <Paragraph>Elencar as despesas por data e categoria é o primeiro passo para a educação financeira.</Paragraph>
      <Form />
    </Content>
  )
}
