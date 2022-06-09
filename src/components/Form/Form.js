import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { DateInput, CategoryInput, ValueInput, DescriptionInput } from './FormInputs/';

const FormContent = styled.View`
  padding-top: 40px;
`;
const RegisterButton = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 10px 20px;
  opacity: ${props => props.disabled ? .6 : 1 };
  background-color: #4285F4;
  width: ${props => props.width/2.5}px;
  margin: auto;
`;
const ButtonText = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 14px;
  color: #ffff;
  text-align: center;
`;

export const Form = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <FormContent>

      <DateInput />
      <CategoryInput />
      <ValueInput />
      <DescriptionInput />

      <RegisterButton
        width={screenWidth}
        disabled={true}
      >
        <ButtonText>Registrar gasto</ButtonText>
      </RegisterButton>
    </FormContent>
  )
}