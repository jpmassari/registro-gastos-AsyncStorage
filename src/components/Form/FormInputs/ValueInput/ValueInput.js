import React, { useState, useRef } from 'react';
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
const StatusMessage = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 14px;
  color: ${props => props.color ? '#D25C5C' : '#7BE495'};
  margin-bottom: 10px;
`;

const ERRORS = {
  NOT_EMPTY: 'não pode ser vazio',
  IS_NEGATIVE: 'não pode ser negativo',
  INVALID_FORMAT: 'formato invalido'
};

adjustSignPosition = (value) => {
  const firstPart = value.slice(1,3);
  const secondPart = value.slice(0,1);
  const thirdPart = value.slice(-4);
  return firstPart + ' ' + secondPart + thirdPart;
}
const toFormatBRL = (value) => {
  const formatedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value.replaceAll(',', '.'));
  return isNegativeNumber(value) ? adjustSignPosition(formatedValue) : formatedValue;
}
const isNegativeNumber = (value) => Math.sign(parseInt(value)) === -1;

const validate = (value) => {
  if(!value) {
    return ERRORS.NOT_EMPTY;
  }
  if(isNegativeNumber(value)) {
    return ERRORS.IS_NEGATIVE;
  }
  const formatedValue = toFormatBRL(value).replace(/[R\$\-\.\,]/g,'');
  if(isNaN(formatedValue)) {
    return ERRORS.INVALID_FORMAT;
  }
  return '';
}

export const ValueInput = () => {
  const [ valueInput, setValueInput ] = useState({
    id: 'valueInput',
    placeholder: 'R$ 0,00',
    value: '',
    errorMessage: '' ,
    isFocused: false,
  });
  const [ justLoadedForm, setJustLoadedForm ] = useState(true);
  const removeNonNumericCharacthers = (value) => setValueInput({ ...valueInput, value: value.replace(/[^0-9\-\.\,]/g,'') });

  return (
    <Wrapper>
      <Label>Valor</Label>
      <InputContainer>
        <Input
          keyboardType='numeric'
          placeholder={valueInput.placeholder}
          onChangeText={(value) => removeNonNumericCharacthers(value)}
          onEndEditing={() => {
            const error = validate(valueInput.value);
            setValueInput({
              ...valueInput,
              errorMessage: error,
              isFocused: false,
              value: (error !== ERRORS.INVALID_FORMAT || !error) ? toFormatBRL(valueInput.value) : ''
            })
          }}
          value={valueInput.value}
          onFocus={() => { 
            setValueInput({ ...valueInput, isFocused: true, value: ''});
            setJustLoadedForm(false)
          }}
        />
      </InputContainer>
      { 
       (!valueInput.isFocused && !!valueInput.errorMessage) &&
          <StatusMessage color={!!valueInput.errorMessage}>
            {valueInput.errorMessage}
          </StatusMessage> 
      }
    </Wrapper>
  )
}
