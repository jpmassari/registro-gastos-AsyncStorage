import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const CategoryButtom = styled.TouchableOpacity`
  flex-direction: row
  align-items: center;
  padding-bottom: 20px;
`;
const CategoryIcon = styled.Text`
  font-size: 32px;
  text-align: center;
`;
const CategoryLabel = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;
const CategoryTitle = styled.Text`
  font-family: 'Inter_600SemiBold';
  font-size: 14px;
`;
const CategoryDescription = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 12px;
`;
const CategoryArrow = styled.View`
  position: absolute;
  right: 0;
  top: 16px;
`;
export const CategoryCard = ({
  category
}) => {
  if (!category) return null;
  return(
    <CategoryButtom>

        <CategoryIcon>{category.icon}</CategoryIcon>

        <CategoryLabel>
          <CategoryTitle>{category.title}</CategoryTitle>
          <CategoryDescription>
            {category.description}
          </CategoryDescription>

        </CategoryLabel>
        
        <CategoryArrow>
          <Entypo name={'chevron-right'} size={20} color="black" />
        </CategoryArrow>
        
      </CategoryButtom>
  )
}