import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { CategoryScreen } from '../../../../Screens/CategoryScreen/CategoryScreen'

const Wrapper = styled.View`
  margin-bottom: 20px;
  z-index: 1;
`;
const Label = styled.Text`
  color: #000;
  font-family: 'Inter_700Bold';
  font-size: 14px;
  margin-bottom: 10px;
`;
const InputButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  background-color: #F0EDEB;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
`;
const InputButtonText = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 14px;
  margin-right: auto;
  color: ${props => props.value ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.5)'}
`;

export const CategoryInput = ({
  formValidation = () => null
}) => {

  const [ categoryInput, setCategoryInput ] = useState({
    id: '',
    value: 'Escolha uma opção',
    screenDisplay: false,
    selected: false
  })
  return (
    <>
    {
    categoryInput.screenDisplay &&
      <CategoryScreen 
        closeScreen={() => setCategoryInput({ ...categoryInput, screenDisplay: false })}
        selectedInput={(id, value) => {
          setCategoryInput({ ...categoryInput, id:id, value:value, screenDisplay: false, selected: true });
          formValidation(true, id, value);
        }} 
      /> 
    }
    <Wrapper>
      <Label>Categoria</Label>
      <InputButton
        onPress={() => setCategoryInput({ ...categoryInput, screenDisplay: true })}
      >
        <InputButtonText value={categoryInput.selected}>
          {categoryInput.value}
        </InputButtonText>
        <Entypo name={'chevron-down'} size={24} color="black" />
      </InputButton>
    </Wrapper>
    </>
  )
}
