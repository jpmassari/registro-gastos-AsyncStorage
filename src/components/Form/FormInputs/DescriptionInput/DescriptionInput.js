import React, { useEffect, useState, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled.View`
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
const WordsCounter = styled.Text`
  color: ${props => props.wordCount <= 140 ? '#000' : '#D25C5C'};
  font-family: 'Inter_400Regular';
  font-size: 14px;
  margin-top: 5px;
`;
const StatusMessage = styled(Animated.Text)`
  font-family: 'Inter_400Regular';
  font-size: 14px;
  color: #D25C5C;
  margin-bottom: 10px;
`;
const ALERTS = {
  EXCEEDED_WORDS: 'Limite de caracteres alcançado!'
};

const countWords = (text) => text.split('').length;
const validate = (text) => {
  const wordsAmount = countWords(text)
  if(wordsAmount > 140) {
    return ALERTS.EXCEEDED_WORDS;
  }
  return '';
}

export const DescriptionInput = () => {
  const [ descriptionInput, setDescriptionInput ] = useState({
    id:'descriptionInput',
    placeholder: 'Dê detalhes se necessário',
    value: '',
    wordCount: 0,
    alertMessage: '',
    isFocused: false
  })
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 4000,
      useNativeDriver: false
    }).start();
  };
  useEffect(() => {
    if(descriptionInput.alertMessage === ALERTS.EXCEEDED_WORDS) {
      fadeOut();
      setTimeout(() => {
        setDescriptionInput({ ...descriptionInput, alertMessage: ''});
        fadeAnim.setValue(1);
      },3000)
    }
  },[descriptionInput.alertMessage])

  return (
    <Wrapper>
      <Label>Descrição</Label>
      <InputContainer>
        <Input
          placeholder={descriptionInput.placeholder}
          onChangeText={(value) => {
            const isExceeded = validate(value) //value chega aqui até 141 caracteres, depois recebe o valor de 140 novamente em value: descriptionInput.value
            setDescriptionInput({ 
              ...descriptionInput,
              value: isExceeded ? descriptionInput.value : value,
              wordCount: isExceeded ? 140 : countWords(value),
              alertMessage: isExceeded
           })
          }}
          onEndEditing={() => setDescriptionInput({ ...descriptionInput, isFocused: false })}
          value={descriptionInput.value}
          onFocus={() => setDescriptionInput({ ...descriptionInput, isFocused: true })}
          wordCount={descriptionInput.wordCount}
        />
      </InputContainer>
      <WordsCounter wordCount={descriptionInput.wordCount} >{descriptionInput.wordCount} / 140</WordsCounter>
      {!!descriptionInput.alertMessage && 
        <StatusMessage style={{ opacity: fadeAnim }}>{descriptionInput.alertMessage}</StatusMessage> 
      }
    </Wrapper>
  )
}