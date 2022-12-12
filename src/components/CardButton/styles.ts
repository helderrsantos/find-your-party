import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.green300};
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: center;
`;
export const TitleButton = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.text600};
  color: ${({ theme }) => theme.colors.white100};
`;
