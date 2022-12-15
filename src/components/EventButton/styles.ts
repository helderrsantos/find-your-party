import styled from 'styled-components/native';

export const Container = styled.Pressable`
  border-radius: 6px;
  width: 100%;
  height: 87px;
  padding: 28px 0px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const TitleButton = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.text600};
  color: ${({ theme }) => theme.colors.white100};
`;
