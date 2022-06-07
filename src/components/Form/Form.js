import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const FormContent = styled.View`
  padding-top: 40px;
`;

export const Form = () => {
  return (
    <FormContent>
      <Text>FormInputs: padding-top de 40px</Text>
    </FormContent>
  )
}