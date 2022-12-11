import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin: 24px 16px 0px 16px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 87px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;
export const TitleButton = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text600};
  color: ${({ theme }) => theme.colors.white100};
`;
