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

const toFormat = (value) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
}

export const ValueInput = () => {
  const [ valueInput, setValueInput ] = useState({
    id: 'valueInput',
    placeholder: 'R$ 0,00',
    value: '',
    errorMessage: {
      show: false,
      message: ''
    },
    isFocused: false,
  });
  const [ justLoadedForm, setJustLoadedForm ] = useState(true);
  return (
    <Wrapper>
      <Label>Valor</Label>
      <InputContainer>
        <Input
          keyboardType='numeric'
          placeholder={valueInput.placeholder}
          onChangeText={(value) => setValueInput({ ...valueInput, value: value.replace(/[^0-9\-\.]/g,'') })}
          onEndEditing={() => !valueInput.value || Math.sign(parseInt(valueInput.value)) === -1 ? (
            setValueInput({
              ...valueInput,
              errorMessage: { 
                show: true,
                message: !valueInput.value ? 'não pode ser vazio' : 'não pode ser negativo'       
              },
              isFocused: false, 
              value: toFormat(valueInput.value)
            }) 
          ) : ( 
            setValueInput({ ...valueInput, isFocused: false, value: toFormat(valueInput.value) })
          )}
          value={valueInput.value}
          onFocus={() => { 
            setValueInput({ ...valueInput, isFocused: true, errorMessage: { show: false }, value: ''});
            setJustLoadedForm(false)
          }}
        />
      </InputContainer>
      { 
       (!valueInput.isFocused && valueInput.errorMessage.show) &&
          <StatusMessage color={valueInput.errorMessage.show}>
            {valueInput.errorMessage.message}
          </StatusMessage> 
      }
    </Wrapper>
  )
}
