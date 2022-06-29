import React, { useState } from 'react';
import styled from 'styled-components/native';

import { DateInput, CategoryInput, ValueInput, DescriptionInput } from './FormInputs/';
import { Container, Title, Paragraph } from '../../Screens/styled/styled';
const FormContainer = styled.View`
  padding-top: 40px;
`;

const RegisterButton = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 10px 20px;
  opacity: ${props => props.disabled ? .6 : 1 };
  background-color: #4285F4;
  margin: auto;
`;
const ButtonText = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 14px;
  color: #ffff;
  text-align: center;
`;

const disable = (value, category) => {
  if(!value || !category) {
    return true
  }
  return false
} 

export const Form = () => {
  const [ categoryInputValidated, setCategoryInputValidated ] = useState(false);
  const [ valueInputValidated, setValueInputValidated ] = useState(false);
  console.log(valueInputValidated);
  console.log(categoryInputValidated);
  return (
      <FormContainer>
        <Title>Registro de gastos</Title>
        <Paragraph>Elencar as despesas por data e categoria é o primeiro passo para a educação financeira.</Paragraph>
        
        <DateInput />
        <CategoryInput formValidation={(status) => setCategoryInputValidated(status)} />
        <ValueInput formValidation={(status) => setValueInputValidated(status)} />
        <DescriptionInput/>

        <RegisterButton
          disabled={disable(valueInputValidated, categoryInputValidated)}
        >
          <ButtonText>Registrar gasto</ButtonText>
        </RegisterButton>
      </FormContainer>
  )
}