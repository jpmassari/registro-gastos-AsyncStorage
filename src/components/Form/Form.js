import React, { useState } from 'react';
import styled from 'styled-components/native';

import { DateInput, CategoryInput, ValueInput, DescriptionInput } from './FormInputs/';
import { Title, Paragraph } from '../../Screens/styled/styled';
import { FormSubmissionDialog } from '../Dialogs/FormSubmissionDialog'
import { storeSpendings, getMonthlySpendings } from '../../store/spendings_store'
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
  const [ inputs, setInputs ] = useState({
    date: new Date(),
    formatedDate: '',
    category: {
      id: '',
      value: '',
      isValidated: false
    },
    value: {
      isValidated: false,
      value: 0,
    }
  })
  const [ showDialog, setShowDialog ] = useState(false);
  const [ spendings, setSpendings ] = useState(0);
  return (
    <FormContainer>
      <Title>Registro de gastos</Title>
      <Paragraph>Elencar as despesas por data e categoria é o primeiro passo para a educação financeira.</Paragraph>
      
      <DateInput formValidation={(monthYear, dateISO) => setInputs({ ...inputs, formatedDate: monthYear, date: dateISO })} />
      <CategoryInput formValidation={(status, id, value) => setInputs({ ...inputs, category: { id: id, value: value, isValidated: status } })} />
      <ValueInput formValidation={(status, value) => setInputs({ ...inputs, value: { isValidated: status, value: value } })} />
      <DescriptionInput/>

      <RegisterButton
        disabled={disable(inputs.value.isValidated, inputs.category.isValidated)} 
        onPress={() => { 
          const fetchSpends = async () => {
            const toStore = {
              category: {
                id: inputs.category.id,
                description: inputs.category.value
              },
              date: {
                iso: inputs.date,
                formated: inputs.formatedDate
              },
              value: inputs.value.value
            }
            await storeSpendings(toStore)
            const spends = await getMonthlySpendings(inputs.formatedDate, inputs.category.id)
            setSpendings(spends);
            setShowDialog(true);
          }         
          fetchSpends();
        }}
      >
        <ButtonText>Registrar gasto</ButtonText>
      </RegisterButton>
      { showDialog && 
        <FormSubmissionDialog 
          closeDialog={() => setShowDialog(false)}
          description={inputs.category.value}
          date={inputs.formatedDate}
          spendings={spendings}
        /> 
      }
    </FormContainer>
  )
}
