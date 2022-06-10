import React, { useState } from 'react';
import styled from 'styled-components/native';

import { DateInput, CategoryInput, ValueInput, DescriptionInput } from './FormInputs/';

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

export const Form = () => {
  const [ calendarShown, setCalendarShown ] = useState(false)
  return (
      <FormContainer calendarShown={calendarShown}>
        {
          calendarShown ? (
            <DateInput calendarShown={() => setCalendarShown()}/>
          ) : (
            <>
            <DateInput calendarShown={() => setCalendarShown(true)}/>
            <CategoryInput />
            <ValueInput />
            <DescriptionInput />
    
            <RegisterButton
              disabled={true}
            >
              <ButtonText>Registrar gasto</ButtonText>
            </RegisterButton>
            </>
          )
        }
      </FormContainer>
  )
}