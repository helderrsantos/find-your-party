import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;
export const Box = styled.TouchableOpacity`
  width: 20px;
  align-items: center;
  justify-content: center;
`;
export const EventTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white200};
  font-family: ${({ theme }) => theme.fonts.text600};
`;
