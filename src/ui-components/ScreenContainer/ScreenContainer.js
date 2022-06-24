import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const LayoutContainer = styled.View`
  padding-top: ${Constants.statusBarHeight + 6}px;
`;
export const ScrollableScreenContainer = styled.ScrollView`
  backgroundColor: #FFFFFF;
  flex: 1;
`;
