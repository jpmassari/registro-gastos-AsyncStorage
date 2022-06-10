import styled from 'styled-components/native';

import { LayoutPadding } from '../../ui-components/LayoutPadding/LayoutPadding';

export const Container = styled(LayoutPadding)`
  flex-direction: column;
  flex: 1;
`;
export const Title = styled.Text`
  color: #000;
  font-family: 'Inter_700Bold';
  font-size: 24px;
`;
export const Paragraph = styled.Text`
  font-family: 'Inter_400Regular';
  font-size: 16px;
  color: #000;
  text-align: left;
  ${props => props.center && `
    text-align: center;
  `}
`;
