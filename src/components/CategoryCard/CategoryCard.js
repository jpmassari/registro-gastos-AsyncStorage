import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const Container = styled.View`
  flex-direction: row
  align-items: center;
  padding-bottom: 20px;
`;
const CategoryIcon = styled.Text`
  font-size: 32px;
  text-align: center;
`;
const Texts = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;
const Title = styled.Text`
  font-family: 'Inter_600SemiBold';
  font-size: 14px;
`;
const Description = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 12px;
`;
const ArrowIcon = styled.View`
  position: absolute;
  right: 0;
  top: 16px;
`;

export const CategoryCard = ({
  category
}) => {
  return(
    <Container>
      <CategoryIcon>{category.icon}</CategoryIcon>
      
      <Texts>
        <Title>{category.title}</Title>
        <Description>
          {category.description}
        </Description>
      </Texts>
      
      <ArrowIcon>
        <Entypo name={'chevron-right'} size={20} color="black" />
      </ArrowIcon>     
    </Container>
  )
}
