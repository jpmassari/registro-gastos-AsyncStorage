import React, { useState } from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { DateInput, CategoryInput, ValueInput, DescriptionInput } from './FormInputs/';
import { Title, Paragraph } from '../../Screens/styled/styled';
import { uuid } from '../../utils/uuid'

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
  const [ inputs, setInputs ] = useState ({
    id: uuid(),
    date: '',
    category: {
      isValidated: false,
      value: ''
    },
    value: {
      isValidated: false,
      value: '',
    }
  })
  /* AsyncStorage.getItem(inputs.id, (err, result) => {
    console.log(result);
  }); */
  return (
      <FormContainer>
        <Title>Registro de gastos</Title>
        <Paragraph>Elencar as despesas por data e categoria é o primeiro passo para a educação financeira.</Paragraph>
        
        <DateInput formValidation={(date) => setInputs({ ...inputs, date:date })} />
        <CategoryInput formValidation={(status, value) => setInputs({ ...inputs, category: { isValidated: status, value: value } })} />
        <ValueInput formValidation={(status, value) => setInputs({ ...inputs, value: { isValidated: status, value: value } })} />
        <DescriptionInput/>

        <RegisterButton
          disabled={disable(inputs.value.isValidated, inputs.category.isValidated)}
          onPress={() => {  
            AsyncStorage.setItem(inputs.id,
              JSON.stringify({ 
                date: inputs.date,
                category: inputs.category.value,
                value: inputs.value.value
              }))
          }}
        >
          <ButtonText>Registrar gasto</ButtonText>
        </RegisterButton>
      </FormContainer>
  )
}