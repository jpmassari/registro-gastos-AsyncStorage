import React from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const InputContent = styled.View`
  margin-bottom: 20px;
`;
const Label = styled.Text`
color: #000;
font-family: 'Inter_700Bold';
font-size: 14px;
margin-bottom: 10px;
`;
const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  background-color: #F0EDEB;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-family: 'Inter_400Regular';
  font-size: 14px;
  margin-right: auto;
`;

export const CategoryInput = () => {
  return (
    <InputContent>
      <Label>Categoria</Label>
      <InputContainer>
        <Input
          placeholder="Escolha uma opção"
        />
        <Entypo name="chevron-down" size={24} color="black" />
      </InputContainer>
    </InputContent>
  )
}