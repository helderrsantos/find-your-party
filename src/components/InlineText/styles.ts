import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 8px;
  flex-direction: row;
`;
export const CustomText = styled.Text`
  font-size: 12px;
  padding-left: 8px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text400};
`;
