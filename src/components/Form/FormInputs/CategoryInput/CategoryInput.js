import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { CategoriesScreen } from '../../../../Screens/CategoriesScreen/CategoriesScreen'

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

export const CategoryInput = () => {
  const [ categoryInput, setCategoryInput ] = useState({
    placeHolder: 'Escolha uma opção',
    value: '',
    showCategoriesScreen: false
  })
  return (
    <>
    {
    categoryInput.showCategoriesScreen &&
      <CategoriesScreen 
        closeScreen={() => setCategoryInput({ ...categoryInput, showCategoriesScreen: false})} 
      /> 
    }
    <Wrapper>
      <Label>Categoria</Label>
      <InputButton
        onPress={() => setCategoryInput({...categoryInput, showCategoriesScreen: true})}
      >
        <InputButtonText value={categoryInput.value}>
          {categoryInput.value ? categoryInput.value : categoryInput.placeHolder}
        </InputButtonText>
        <Entypo name={'chevron-down'} size={24} color="black" />
      </InputButton>
    </Wrapper>
    </>
  )
}
