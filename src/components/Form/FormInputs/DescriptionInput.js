import React from 'react';
import styled from 'styled-components/native';

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
const WordsCount = styled.Text`
  color: #000;
  font-family: 'Inter_400Regular';
  font-size: 14px;
  margin-top: 5px;
`;

export const DescriptionInput = () => {
  return (
    <InputContent>
      <Label>Descrição</Label>
      <InputContainer>
        <Input
          placeholder="Dê detalhes se necessário"
        />
      </InputContainer>
      <WordsCount>0 / 140</WordsCount>
    </InputContent>
  )
}