import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Title, Paragraph } from '../styled/styled'

const ScreenPressable = styled.Pressable`
  background-color: black;
  position: absolute;
  opacity: .6;
  top: -200px;
  bottom: -20px;
  margin: auto;
  left: -20px;
  right: -20px;
  z-index: 2;
`;
const Dialog = styled.View`
  padding: 20px 15px 30px;
  position: absolute;
  bottom: -20px;
  left: auto;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  z-index: 3;
`;
const DialogButton = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 10px 20px;
  border: #000;
  margin: auto;
`;
const ButtonText = styled.Text`
  font-family: 'Inter_700Bold';
  font-size: 14px;
  color: #000;
  text-align: center;
`;

const toFormatBRL = (value) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
export const FormSubmissionDialog = ({
  closeDialog = () => null,
  category = '',
  date = '',
  spendings = 0
}) => {
  return (
    <>
    <ScreenPressable
      onPress={() => closeDialog()}
    />
      <Dialog>
        <Title>Muito obrigado!</Title>
        <Paragraph>Até agora você já gastou {toFormatBRL(spendings)} em "{category}" no mês de “{date}”</Paragraph>
        <DialogButton
          onPress={() => closeDialog()}
        >
          <ButtonText>Entendi, Obrigado</ButtonText>
        </DialogButton>
      </Dialog>
    </>
  )
}