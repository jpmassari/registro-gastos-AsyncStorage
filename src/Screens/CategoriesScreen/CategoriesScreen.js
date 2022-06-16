import React from "react";
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 

import { Container, Title, Paragraph, DivisorLine } from '../styled/styled';
import { Categories } from './CategoryList/CategoryList'
import { CategoryCard } from '../../components/CategoryCard/CategoryCard'

const ContentIndex = styled(Container)`
  position: absolute;
  background-color: #ffff;
  z-index: 2;
  top: 0;
  right: -20px;
  bottom: 0;
  left: -20px;
`;
const PressableIcon = styled.TouchableOpacity`
  display: flex;
  margin-right: auto;
`;
const Wrapper = styled.View`
  padding: 40px 0 30px 0;
`;
const ScrollableContainer = styled.ScrollView`
  flex: 1;
`;

export const CategoriesScreen = ({
  closeScreen = () => null
}) => {
  return (
      <ContentIndex>
        <PressableIcon
          onPress={() => closeScreen() }
        >
          <AntDesign name="close" size={40} color="black" />
        </PressableIcon>
        <Wrapper>
          <Title>Categoria de gastos</Title>
          <Paragraph>Escolha uma categoria que melhor se encaixe ao seu tipo de gasto.</Paragraph>
        </Wrapper>

        <DivisorLine/>
        <ScrollableContainer>
          {
          Categories.map(c => (
            <CategoryCard
              key={c.title}
              category={c}
            />
          ))} 
        </ScrollableContainer>
      </ContentIndex>
  )
}
