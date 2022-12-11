import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black};
  flex: 1;
`;

export const Box = styled.TouchableOpacity`
  width: 24px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 16px 10px 16px;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.colors.gray200};
  height: 140px;
`;
export const EventTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white200};
`;

export const Button = styled.TouchableOpacity`
  height: 202px;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: black;
  margin: 24px 16px 16px 16px;
  font-size: 10px;
  border-radius: 6px;
`;

export const Event = styled.Text`
  font-size: 20px;
  width: 20px;
  background-color: green;
`;

export const EventName = styled.Text`
  font-size: 20px;
  width: 100px;
  height: 100px;
  color: ${({ theme }) => theme.colors.white200};
`;
